-- CreateTable
CREATE TABLE `EchartTable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `masterNum` INTEGER NULL,
    `devNum` INTEGER NULL,

    UNIQUE INDEX `EchartTable_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EchartDictionary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `typeId` INTEGER NOT NULL,
    `masterName` VARCHAR(191) NOT NULL,
    `devName` VARCHAR(191) NOT NULL,

    INDEX `EchartDictionary_typeId_idx`(`typeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
