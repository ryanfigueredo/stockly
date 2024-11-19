import { z } from "zod";

export class ProductIsOutOfStock extends Error {
  constructor() {
    super("Produto sem Estoque");
  }
}

export const createSaleSchema = z.object({
  products: z.array(
    z.object({
      id: z.string().uuid(),
      quantity: z.number().int().positive(),
    }),
  ),
});

export type CreateSaleSchema = z.infer<typeof createSaleSchema>;
