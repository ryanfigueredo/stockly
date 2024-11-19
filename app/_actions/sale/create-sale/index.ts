/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/app/_lib/prisma";
import {
  createSaleSchema,
  CreateSaleSchema,
  ProductIsOutOfStock,
} from "./schema";
import { revalidatePath } from "next/cache";

interface CreateSaleResponse {
  data?: any;
  error?: any;
}

export const createSale = async (
  data: CreateSaleSchema,
): Promise<CreateSaleResponse> => {
  createSaleSchema.parse(data);
  const response: CreateSaleResponse = {
    error: null,
    data: null,
  };
  await db.$transaction(async (trx) => {
    const sale = await trx.sale.create({
      data: {
        date: new Date(),
      },
    });
    for (const product of data.products) {
      const productFromDb = await trx.product.findUnique({
        where: {
          id: product.id,
        },
      });
      if (!productFromDb) {
        return (response.error = "Product not found");
      }
      const productIsOutOfStock = product.quantity > productFromDb.stock;
      if (productIsOutOfStock) {
        return (response.error = new ProductIsOutOfStock().message);
      }
      await trx.saleProduct.create({
        data: {
          saleId: sale.id,
          productId: product.id,
          quantity: product.quantity,
          unitPrice: productFromDb.price,
        },
      });
      await trx.product.update({
        where: {
          id: product.id,
        },
        data: {
          stock: {
            decrement: product.quantity,
          },
        },
      });
    }
    response.data = sale;
  });

  revalidatePath("/products");
  return response;
};
