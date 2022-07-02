/*
  Warnings:

  - The primary key for the `EventSong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `EventSong` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `EventSong` table. All the data in the column will be lost.
  - The primary key for the `InstrumentSong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `InstrumentSong` table. All the data in the column will be lost.
  - Made the column `eventId` on table `EventSong` required. This step will fail if there are existing NULL values in that column.
  - Made the column `songId` on table `EventSong` required. This step will fail if there are existing NULL values in that column.
  - Made the column `instrumentId` on table `InstrumentSong` required. This step will fail if there are existing NULL values in that column.
  - Made the column `songId` on table `InstrumentSong` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Session` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `EventSong` DROP FOREIGN KEY `EventSong_ibfk_1`;

-- DropForeignKey
ALTER TABLE `EventSong` DROP FOREIGN KEY `EventSong_ibfk_2`;

-- DropForeignKey
ALTER TABLE `InstrumentSong` DROP FOREIGN KEY `InstrumentSong_ibfk_1`;

-- DropForeignKey
ALTER TABLE `InstrumentSong` DROP FOREIGN KEY `InstrumentSong_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_ibfk_1`;

-- AlterTable
ALTER TABLE `EventSong` DROP PRIMARY KEY,
    DROP COLUMN `description`,
    DROP COLUMN `id`,
    MODIFY `eventId` INTEGER NOT NULL,
    MODIFY `songId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`eventId`, `songId`);

-- AlterTable
ALTER TABLE `InstrumentSong` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `instrumentId` INTEGER NOT NULL,
    MODIFY `songId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`instrumentId`, `songId`);

-- AlterTable
ALTER TABLE `Session` MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `EventSong` ADD CONSTRAINT `EventSong_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventSong` ADD CONSTRAINT `EventSong_ibfk_2` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstrumentSong` ADD CONSTRAINT `InstrumentSong_ibfk_1` FOREIGN KEY (`instrumentId`) REFERENCES `Instrument`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstrumentSong` ADD CONSTRAINT `InstrumentSong_ibfk_2` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
