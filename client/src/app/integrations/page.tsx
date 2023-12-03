import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import prisma from '@/lib/db'

import { columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import { UserNav } from "@/components/user-nav"
import { taskSchema } from "@/data/schema"
import TeamSwitcher from "@/components/team-switcher"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())
  console.log(z.array(taskSchema).parse(tasks))

  return z.array(taskSchema).parse(tasks)
}

async function getDogs() {
  // const res = await fetch('https://dog.ceo/api/breeds/list/all');
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data')
  // }
  // return res.json()

  const tasks = await prisma.task.findMany();
  return tasks;
}

export default async function TaskPage() {
  const tasks = await getTasks();
  const dogs = await getDogs();
  // console.log(dogs);

  return (
    <>
    <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
      <div className="md:hidden">
        {/* <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        /> */}
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
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}