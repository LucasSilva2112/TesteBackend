-- CreateTable
CREATE TABLE `brands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `logo_img` VARCHAR(255) NULL,
    `min_value` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `min_installments_value` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `visible` BOOLEAN NULL DEFAULT true,
    `sku_order` VARCHAR(255) NULL,
    `address_id` INTEGER NULL,
    `business_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,
    `companyId` INTEGER NOT NULL,

    UNIQUE INDEX `brands_address_id_key`(`address_id`),
    INDEX `brands_business_id_fkey`(`business_id`),
    INDEX `brands_companyId_fkey`(`companyId`),
    UNIQUE INDEX `brands_name_companyId_key`(`name`, `companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(37) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `companyId` INTEGER NOT NULL,

    INDEX `categories_companyId_fkey`(`companyId`),
    UNIQUE INDEX `categories_name_companyId_key`(`name`, `companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `price_tables` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(255) NOT NULL,
    `price_adjustment` DECIMAL(5, 4) NOT NULL DEFAULT 1.0000,
    `minimum_value` DECIMAL(10, 2) NOT NULL,
    `visible` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `companyId` INTEGER NOT NULL,

    INDEX `price_table_companyId_fkey`(`companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `price_tables_skus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `sku_id` INTEGER NOT NULL,
    `price_table_id` INTEGER NOT NULL,

    INDEX `fk_price_table`(`price_table_id`),
    UNIQUE INDEX `unique_sku_price_table`(`sku_id`, `price_table_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `reference` VARCHAR(30) NOT NULL,
    `type` ENUM('NACIONAL', 'IMPORTADO') NULL,
    `gender` ENUM('MASCULINO', 'FEMININO', 'INFANTIL', 'JUVENIL', 'UNISSEX', 'FAT', 'OUTRO') NULL,
    `prompt_delivery` BOOLEAN NULL,
    `description` VARCHAR(255) NULL,
    `erp_id` VARCHAR(37) NULL,
    `brand_id` INTEGER NOT NULL,
    `deadline_id` INTEGER NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `category_id` INTEGER UNSIGNED NULL,
    `subcategory_id` INTEGER UNSIGNED NULL,
    `category_order` TINYINT NULL DEFAULT 0,
    `composition_data` VARCHAR(255) NULL,
    `technical_information` VARCHAR(255) NULL,
    `open_grid` BOOLEAN NOT NULL DEFAULT false,
    `ipi` DECIMAL(10, 2) NULL DEFAULT 0.00,
    `is_discontinued` BOOLEAN NOT NULL DEFAULT false,
    `is_launch` BOOLEAN NOT NULL DEFAULT false,
    `is_visible` BOOLEAN NOT NULL DEFAULT true,
    `colection` VARCHAR(255) NULL,
    `companyId` INTEGER NOT NULL,

    INDEX `fk_categories_products`(`category_id`),
    INDEX `fk_subcategories_products`(`subcategory_id`),
    INDEX `products_brandId_fkey`(`brand_id`),
    INDEX `products_companyId_fkey`(`companyId`),
    INDEX `products_deadlineId_fkey`(`deadline_id`),
    UNIQUE INDEX `products_erpId_companyId_key`(`erp_id`, `companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `reated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,
    `gender` VARCHAR(191) NULL,
    `reference` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(10) NOT NULL,
    `stock` INTEGER NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `code` VARCHAR(13) NOT NULL,
    `min_quantity` INTEGER NULL DEFAULT 1,
    `multiple_quantity` INTEGER NOT NULL,
    `erpId` VARCHAR(191) NOT NULL,
    `variant_id` INTEGER NOT NULL,
    `cest` VARCHAR(50) NULL,
    `height` DOUBLE NULL,
    `length` DOUBLE NULL,
    `ncm` VARCHAR(50) NULL,
    `weight` DOUBLE NULL,
    `width` DOUBLE NULL,
    `created_at` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL,
    `deleted_at` DATETIME(0) NULL,

    UNIQUE INDEX `skus_erpId_key`(`erpId`),
    INDEX `skus_variant_id_fkey`(`variant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategories` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(37) NOT NULL,
    `category_id` INTEGER UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_subcategories_categories`(`category_id`),
    UNIQUE INDEX `subcategories_name_category_id_key`(`name`, `category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `variants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `hex_code` VARCHAR(7) NULL,
    `product_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,
    `deleted_at` TIMESTAMP(0) NULL,

    INDEX `fk_variants_products`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `brands` ADD CONSTRAINT `brands_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `price_tables` ADD CONSTRAINT `price_tables_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `price_tables_skus` ADD CONSTRAINT `fk_price_table` FOREIGN KEY (`price_table_id`) REFERENCES `price_tables`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `price_tables_skus` ADD CONSTRAINT `fk_price_table_sku` FOREIGN KEY (`sku_id`) REFERENCES `skus`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `fk_brands_company` FOREIGN KEY (`brand_id`) REFERENCES `brands`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `fk_categories_products` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `fk_subcategories_products` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skus` ADD CONSTRAINT `skus_variant_id_fkey` FOREIGN KEY (`variant_id`) REFERENCES `variants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subcategories` ADD CONSTRAINT `fk_subcategories_categories` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `variants` ADD CONSTRAINT `fk_variants_products` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
