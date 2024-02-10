import { PrismaClient, Specification, Plan, Product } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { labels, tiers, pillars, eventSchemas, contextSchemas} from "../src/data/data";

const prisma = new PrismaClient();

async function main() {
  /**
   * Create Products
   */

  await prisma.product.deleteMany({});

  const amountOfProducts = 10;
  const products: Product[] = [];

  for (let i = 0; i < amountOfProducts; i++) {
    const product: Product = {
      id: faker.string.uuid(),
      name: faker.lorem
        .words(2)
        .replace(/^./, (letter) => letter.toUpperCase()),
      description: faker.hacker
        .phrase()
        .replace(/^./, (letter) => letter.toUpperCase()),
    };
    products.push(product);
  }

  await prisma.product.createMany({ data: products });

  /**
   * Create Plans
   */
  const productIds = (await prisma.product.findMany({})).map(
    (product) => product.id
  );
  await prisma.plan.deleteMany({});

  const amountOfPlans = 80;
  const plans: Plan[] = [];

  for (let i = 0; i < amountOfPlans; i++) {
    const plan: Plan = {
      id: faker.string.uuid(),
      name: faker.hacker
        .phrase()
        .replace(/^./, (letter) => letter.toUpperCase()),
      description: faker.hacker
        .phrase()
        .replace(/^./, (letter) => letter.toUpperCase()),
      published: faker.helpers.arrayElement([true, false]),
      label: faker.helpers.arrayElement(labels).value,
      pillar: faker.helpers.arrayElement(pillars).value,
      tier: faker.helpers.arrayElement(tiers).value,
      productId: faker.helpers.arrayElement(productIds),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };
    plans.push(plan);
  }

  await prisma.plan.createMany({ data: plans });

  /**
   * Create Specifications
   */
  const planIds = (await prisma.plan.findMany({})).map((plan) => plan.id);
  await prisma.specification.deleteMany({});

  const amountOfSpecifications = 320;
  const specifications: Specification[] = [];

  for (let i = 0; i < amountOfSpecifications; i++) {
    const specification: Specification = {
      id: faker.string.uuid(),
      test: faker.lorem.lines(1),
      event: faker.helpers.arrayElement(eventSchemas),
      contexts: faker.helpers.arrayElements(contextSchemas, { min: 1, max: 5 }),
      planId: faker.helpers.arrayElement(planIds),
    };
    specifications.push(specification);
  }

  await prisma.specification.createMany({ data: specifications });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
