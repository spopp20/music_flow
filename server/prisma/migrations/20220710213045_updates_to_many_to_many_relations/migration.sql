/*
  Warnings:

  - You are about to drop the column `endDateTime` on the `Event` table. All the data in the column will be lost.
  - The primary key for the `EventSong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `InstrumentSong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tags` on the `Song` table. All the data in the column will be lost.
  - Made the column `active` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id` to the `EventSong` table without a default value. This is not possible if the table is not empty.
  - Made the column `active` on table `Instrument` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `id` to the `InstrumentSong` table without a default value. This is not possible if the table is not empty.
  - Made the column `active` on table `Song` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tempoCd` on table `Song` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Event` DROP COLUMN `endDateTime`,
    ALTER COLUMN `name` DROP DEFAULT,
    MODIFY `active` TINYINT NOT NULL;

-- AlterTable
ALTER TABLE `EventSong` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Instrument` ALTER COLUMN `name` DROP DEFAULT,
    MODIFY `active` TINYINT NOT NULL;

-- AlterTable
ALTER TABLE `InstrumentSong` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Song` DROP COLUMN `tags`,
    ALTER COLUMN `title` DROP DEFAULT,
    MODIFY `active` TINYINT NOT NULL,
    MODIFY `tempoCd` TINYINT NOT NULL;

-- AlterTable
ALTER TABLE `User` ALTER COLUMN `active` DROP DEFAULT;

-- CreateTable
CREATE TABLE `SongTags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `songId` INTEGER NULL,
    `tagId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SongTags` ADD CONSTRAINT `SongTags_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SongTags` ADD CONSTRAINT `SongTags_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
