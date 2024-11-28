import { db } from "@/app/_lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, string> },
) {
  const productId = params.id;

  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Record<string, string> },
) {
  const productId = params.id;

  await db.product.delete({
    where: {
      id: productId,
    },
  });

  return NextResponse.json({}, { status: 200 });
}
