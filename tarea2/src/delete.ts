import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // ... you will write your Prisma Client queries here
    const fichaId = 2;

    const deletedFicha = await prisma.ficha.delete({
      where: {
        id: fichaId,
      }
    });

    console.log('ficha eliminada:', deletedFicha);
  } catch (error) {
    console.error('Error al eliminar la ficha:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
