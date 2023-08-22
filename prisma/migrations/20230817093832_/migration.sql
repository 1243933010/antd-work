-- DropIndex
DROP INDEX `EchartDictionary_typeId_idx` ON `echartdictionary`;

-- DropIndex
DROP INDEX `EchartTable_type_key` ON `echarttable`;

-- CreateIndex
CREATE INDEX `EchartDictionary_id_idx` ON `EchartDictionary`(`id`);
