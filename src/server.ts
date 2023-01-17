import Fastify from 'fastify';
import Cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
const port = 5000;
const app = Fastify();
const prisma = new PrismaClient();

app.register(Cors);

app.get('/', async () => {
  const habits = await prisma.habit.findMany({
    where: { title: { startsWith: 'B' } },
  });
  return habits;
});

app.listen({ port }).then(() => {
  console.log(`🚀 Server running on port ${port}!`);
});
