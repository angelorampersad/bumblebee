import { Metadata } from "next";
import prisma from "@/lib/db";

import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import TeamSwitcher from "@/components/team-switcher";
import { MainNav } from "@/components/main-nav";
import { Logo } from "@/components/logo";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  title: "Plans",
  description: "A plan and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getPlans(productId: string) {
  const plans = await prisma.plan.findMany({
    where: {
      productId: productId,
    },
  });
  return plans;
}

export default async function TaskPage({
  params,
}: {
  params: { productId: string };
}) {
  const plans = await getPlans(params.productId);
  const session = await getServerSession(options);

  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Logo />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav session={session}/>
          </div>
        </div>
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Integrations</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of the JET Analytics Platform Hub configured integrations
            </p>
          </div>
        </div>
        <DataTable data={plans} columns={columns} />
      </div>
    </>
  );
}
