import { db } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("teste");
  console.log({ query });
  const prouctId = params.id;
  const product = await db.product.findUnique({
    where: {
      id: prouctId,
    },
  });
  if (!product) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }
  return Response.json(product, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  await db.product.delete({
    where: {
      id: params.id,
    },
  });
  return Response.json({}, { status: 200 });
}
