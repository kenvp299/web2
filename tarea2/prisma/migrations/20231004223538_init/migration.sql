-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "correo" TEXT,
    "contrasenia" TEXT,
    "genero" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicacion" (
    "id" SERIAL NOT NULL,
    "caso" TEXT NOT NULL,
    "nombre_medicina" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,

    CONSTRAINT "Medicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ficha" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "medicamentoId" INTEGER NOT NULL,

    CONSTRAINT "Ficha_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ficha" ADD CONSTRAINT "Ficha_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ficha" ADD CONSTRAINT "Ficha_medicamentoId_fkey" FOREIGN KEY ("medicamentoId") REFERENCES "Medicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
