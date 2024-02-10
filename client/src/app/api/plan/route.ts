import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  const { productId, name, description, specifications } = await req.json();

  const res = await prisma.plan.create({
    data: {
      name,
      description,
      published: false,
      label: "P0",
      productId,
      specifications: {
        create: specifications,
      },
    },
  });

  return NextResponse.json(res, { status: 200 });
}

export async function PUT(req: Request) {
  const { id, productId, published, name, description, specifications } =
    await req.json();
  const res = await prisma.plan.update({
    where: {
      id: id,
    },
    data: {
      name,
      productId,
      description,
      published,
      specifications: {
        deleteMany: {},
        createMany: { data: specifications },
      },
    },
    include: { specifications: true },
  });

  return NextResponse.json(res, { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const res = await prisma.plan.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(res, { status: 200 });
}
