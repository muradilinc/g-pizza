import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

async function up() {
  await prisma.user.createMany({
    data: [{
      fullName: 'Gojo',
      email: 'test1@gmail.com',
      password: hashSync('12231', 10),
      verified: new Date(),
      role: 'USER'
    }, {
      fullName: 'Sukuna',
      email: 'test12@gmail.com',
      password: hashSync('12231', 10),
      verified: new Date(),
      role: 'ADMIN'
    }]
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (error) => {
  await prisma.$disconnect();
  process.exit(1);
});