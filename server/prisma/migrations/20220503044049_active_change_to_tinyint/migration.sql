/*
  Warnings:

  - You are about to alter the column `active` on the `Event` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `active` on the `Instrument` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `active` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `active` TINYINT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `Instrument` MODIFY `active` TINYINT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `User` MODIFY `active` TINYINT NULL DEFAULT 1;
