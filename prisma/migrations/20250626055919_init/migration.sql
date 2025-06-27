/*
  Warnings:

  - You are about to drop the column `embedding` on the `product` table. All the data in the column will be lost.
  - Changed the type of `features` on the `product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "embedding",
DROP COLUMN "features",
ADD COLUMN     "features" JSONB NOT NULL;
