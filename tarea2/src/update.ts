import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    
    const fichaId = 3; 

    const nuevosDatos = {
      pacienteId: 1,
      medicamentoId: 1
    };

    const fichaActualizado = await prisma.ficha.update({
      where: { id: fichaId },
      data: nuevosDatos,
    });

    console.log('Ficha actualizado:', fichaActualizado);
  } catch (error) {
    console.error('Error al actualizar ficha:', error);
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
