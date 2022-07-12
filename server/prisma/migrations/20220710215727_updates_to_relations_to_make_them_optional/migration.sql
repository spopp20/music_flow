/*
  Warnings:

  - You are about to drop the column `published` on the `EventSong` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `EventSong` table. All the data in the column will be lost.

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
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_ibfk_1`;

-- AlterTable
ALTER TABLE `EventSong` DROP COLUMN `published`,
    DROP COLUMN `updatedAt`,
    MODIFY `eventId` INTEGER NULL,
    MODIFY `songId` INTEGER NULL;

-- AlterTable
ALTER TABLE `InstrumentSong` MODIFY `instrumentId` INTEGER NULL,
    MODIFY `songId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Profile` MODIFY `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Session` MODIFY `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Token` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `EventSong` ADD CONSTRAINT `EventSong_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EventSong` ADD CONSTRAINT `EventSong_ibfk_2` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstrumentSong` ADD CONSTRAINT `InstrumentSong_ibfk_1` FOREIGN KEY (`instrumentId`) REFERENCES `Instrument`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InstrumentSong` ADD CONSTRAINT `InstrumentSong_ibfk_2` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
