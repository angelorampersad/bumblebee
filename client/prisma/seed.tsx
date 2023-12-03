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
      status: faker.helpers.arrayElement(['in progress', 'backlog', 'todo', 'canceled', 'done']),
      label: faker.helpers.arrayElement(['documentation', 'bug', 'feature']),
      priority: faker.helpers.arrayElement(['low', 'medium', 'high']),
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