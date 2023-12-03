import { Metadata } from "next"
import prisma from '@/lib/db'

import { columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import TeamSwitcher from "@/components/team-switcher"
import { MainNav } from "@/components/main-nav"
import { Logo } from "@/components/logo"
import { Search } from "@/components/search"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getPlans() {

  const plans = await prisma.plan.findMany();
  return plans;
}

export default async function TaskPage() {
  const plans = await getPlans();

  return (
    <>
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
            <Logo />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <TeamSwitcher />
            </div>
          </div>
        </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Integrations</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of Bumblebee configured integrations
            </p>
          </div>
        </div>
        <DataTable data={plans} columns={columns} />
      </div>
    </>
  )
}