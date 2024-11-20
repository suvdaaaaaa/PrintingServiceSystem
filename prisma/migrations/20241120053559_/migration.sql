/*
  Warnings:

  - You are about to drop the column `delivery_type` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `paper_type` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `side` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `unit_price` on the `Material` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Material" DROP COLUMN "delivery_type",
DROP COLUMN "description",
DROP COLUMN "paper_type",
DROP COLUMN "quantity",
DROP COLUMN "side",
DROP COLUMN "unit_price";
