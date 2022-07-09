/*
  Warnings:

  - Added the required column `updatedAt` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` MODIFY `startDateTime` TIMESTAMP(0) NULL,
    MODIFY `endDateTime` TIMESTAMP(0) NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `EventSong` MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Instrument` MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `InstrumentSong` MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Session` MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Song` MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Token` MODIFY `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `updatedAt` DATETIME(3) NOT NULL;
