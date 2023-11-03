-- CreateTable
CREATE TABLE `PackageTable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shopToken` VARCHAR(191) NOT NULL DEFAULT '',

    INDEX `PackageTable_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
