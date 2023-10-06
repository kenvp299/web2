import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const datos_paciente = await prisma.paciente.create({
        data: {
            nombre: 'Angelina',
            apellido: 'zambrano',
            cedula: 1314151617,
            genero: 'femenino',
            estado: true
        },
    })
    const datos_medicamento = await prisma.medicacion.create({
        data: {
            nombre_medicina: 'paracetamol',
            caso: 'controlar la fiebre',
            detalle: 'tomar cada 8 horas'
        },
    })
    console.log(datos_paciente)
    console.log(datos_medicamento)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })