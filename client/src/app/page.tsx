import { Metadata } from "next";
import prisma from "@/lib/db";

import TeamSwitcher from "@/components/team-switcher";
import { Logo } from "@/components/logo";
import { ProductList } from "@/components/product-list";
import { UserNav } from "@/components/user-nav";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

export default async function ProductOverviewPage() {
  const products = await getProducts();
  const session = await getServerSession(options);

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Logo />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav session={session}/>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          </div>

          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}
