"use server";

import { db } from "@/app/_lib/prisma";
import { deleteSaleSchema } from "./schema";
import { actionClient } from "@/app/_lib/safe-action";
import { revalidatePath } from "next/cache";

export const deleteSale = actionClient
  .schema(deleteSaleSchema)
  .action(async ({ parsedInput: { id } }) => {
    await db.sale.delete({
      where: {
        id,
      },
    });
    revalidatePath("/sales");
  });
