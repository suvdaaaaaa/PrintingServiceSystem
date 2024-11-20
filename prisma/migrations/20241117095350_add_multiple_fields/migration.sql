/*
  Warnings:

  - Added the required column `delivery_type` to the `Material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paper_type` to the `Material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `side` to the `Material` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_price` to the `Material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Material" ADD COLUMN     "delivery_type" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "paper_type" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "side" INTEGER NOT NULL,
ADD COLUMN     "unit_price" DOUBLE PRECISION NOT NULL;
