import { PrismaClient, Plan } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { labels, tiers, statuses } from "../src/data/data"

const prisma = new PrismaClient();

async function main() {
  await prisma.plan.deleteMany({});

  const amountOfPlans = 65;
  const plans: Plan[] = [];

  for (let i = 0; i < amountOfPlans; i++) {

    const plan: Plan = {
      id: `PLAN-${faker.number.int({ min: 1000, max: 9999 })}`,
      name: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
      status: faker.helpers.arrayElement(statuses).value,
      label: faker.helpers.arrayElement(labels).value,
      tier: faker.helpers.arrayElement(tiers).value,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    plans.push(plan);
  }

  const addUsers = async () => await prisma.plan.createMany({ data: plans });

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