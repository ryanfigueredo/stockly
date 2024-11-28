import "server-only";

import { db } from "@/app/_lib/prisma";

export const getTotalStock = async (): Promise<number> => {
  const result = await db.product.aggregate({
    _sum: {
      stock: true,
    },
  });
  return result._sum.stock || 0;
};
