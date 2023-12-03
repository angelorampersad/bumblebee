import { PrismaClient, Task } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  await prisma.task.deleteMany({});

  const amountOfTasks = 65;

  const tasks: Task[] = [];

  for (let i = 0; i < amountOfTasks; i++) {

    const task: Task = {
      id: faker.string.uuid(),
      title: faker.lorem.words({ min: 3, max: 5 }),
      status: faker.lorem.words(1),
      label: faker.lorem.words(1),
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