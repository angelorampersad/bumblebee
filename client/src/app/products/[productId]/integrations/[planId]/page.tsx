import { Metadata } from "next";
import prisma from "@/lib/db";

import TeamSwitcher from "@/components/team-switcher";
import { MainNav } from "@/components/main-nav";
import { Logo } from "@/components/logo";
import { Search } from "@/components/search";
import { CodeSnippet } from "@/components/code-snippet";
import { EditPlanDialog } from "@/components/edit-plan-dialog";
import { statuses } from "@/data/data";
import { UserNav } from "@/components/user-nav";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  title: "Plans",
  description: "A plan and issue tracker build using Tanstack Table.",
};

async function getPlan(id: string) {
  const plan = await prisma.plan.findUnique({
    where: {
      id: id,
    },
    include: {
      specifications: true,
    },
  });
  return plan;
}

export default async function TaskPage({
  params,
}: {
  params: { planId: string; productId: string };
}) {
  const plan = await getPlan(params.planId);
  const session = await getServerSession(options);

  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Logo />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav session={session} />
          </div>
        </div>
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{plan?.name}</h2>
            <p className="text-muted-foreground">{plan?.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
              {statuses
                .filter((status) => status.value == plan?.published)
                .map((status, i) => (
                  <div className="flex w-[100px] items-center" key={i}>
                    {status.icon && <status.icon className="mr-2 h-4 w-4" />}
                    <small className="text-sm font-medium leading-none">
                      {status.label}
                    </small>
                  </div>
                ))}
              <EditPlanDialog plan={plan} />
            </div>
          </div>
        </div>

        <CodeSnippet data={plan?.specifications} />
      </div>
    </>
  );
}
