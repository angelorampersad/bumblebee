import { PrismaClient, Task } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { labels, priorities, statuses } from "../src/data/data"

const prisma = new PrismaClient();

async function main() {
  await prisma.task.deleteMany({});

  const amountOfTasks = 65;

  const tasks: Task[] = [];

  for (let i = 0; i < amountOfTasks; i++) {

    const task: Task = {
      id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
      title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
      status: faker.helpers.arrayElement(statuses).value,
      label: faker.helpers.arrayElement(labels).value,
      priority: faker.helpers.arrayElement(priorities).value,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    tasks.push(task);
  }

  const addUsers = async () => await prisma.task.createMany({ data: tasks });

  addUsers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });