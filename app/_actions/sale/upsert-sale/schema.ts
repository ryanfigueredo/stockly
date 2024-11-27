import { z } from "zod";

export class ProductIsOutOfStock extends Error {
  constructor() {
    super("Produto sem Estoque");
  }
}

export const upsertSaleSchema = z.object({
  id: z.string().uuid().optional(),
  products: z.array(
    z.object({
      id: z.string().uuid(),
      quantity: z.number().int().positive(),
    }),
  ),
});

export type UpsertSaleSchema = z.infer<typeof upsertSaleSchema>;
