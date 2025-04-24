/*
  Warnings:

  - You are about to drop the column `erpId` on the `variants` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `variants_erpId_key` ON `variants`;

-- AlterTable
ALTER TABLE `variants` DROP COLUMN `erpId`;
