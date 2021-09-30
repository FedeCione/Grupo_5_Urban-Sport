-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`brand` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`subcategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`subcategories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`category_subcategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`category_subcategories` (
  `id` INT(11) NOT NULL,
  `id_subcategory` INT(11) NOT NULL,
  `id_category` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_e1f96759-5a2e-4605-9980-f4f88e861e8a` (`id_subcategory` ASC),
  CONSTRAINT `FK_e1f96759-5a2e-4605-9980-f4f88e861e8a`
    FOREIGN KEY (`id_subcategory`)
    REFERENCES `mydb`.`subcategories` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categories` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `visible` TINYINT(4) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `id_subcategory` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_1ca6c002-3392-41fd-ab51-822a14736ccd` (`id_subcategory` ASC),
  CONSTRAINT `FK_1ca6c002-3392-41fd-ab51-822a14736ccd`
    FOREIGN KEY (`id_subcategory`)
    REFERENCES `mydb`.`category_subcategories` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`colours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`colours` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`images` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`talles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`talles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `talle` TINYINT(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`products` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(800) NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `discount` VARCHAR(45) NULL DEFAULT NULL,
  `id_image` INT(11) NULL DEFAULT NULL,
  `id_marca` INT(11) NULL DEFAULT NULL,
  `id_subcategory` INT(11) NULL DEFAULT NULL,
  `visible` TINYINT(4) NULL DEFAULT NULL,
  `stock` INT(11) NULL DEFAULT NULL,
  `id_talle` INT(11) NULL DEFAULT NULL,
  `id_colour` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_ef2da699-323f-46c8-98f6-6282e3be8efe` (`id_marca` ASC),
  INDEX `FK_9de9f503-acd5-434b-86c2-9c1ba5a3822d` (`id_colour` ASC),
  INDEX `FK_be0e236c-6271-4705-b5bb-b34aab587ad7` (`id_talle` ASC),
  INDEX `FK_fbdbc21b-a531-483c-9cce-8f71e105dfe9` (`id_subcategory` ASC),
  INDEX `FK_594adef5-221a-456a-9576-ab6e226eaa39` (`id_image` ASC),
  CONSTRAINT `FK_594adef5-221a-456a-9576-ab6e226eaa39`
    FOREIGN KEY (`id_image`)
    REFERENCES `mydb`.`images` (`id`),
  CONSTRAINT `FK_9de9f503-acd5-434b-86c2-9c1ba5a3822d`
    FOREIGN KEY (`id_colour`)
    REFERENCES `mydb`.`colours` (`id`),
  CONSTRAINT `FK_be0e236c-6271-4705-b5bb-b34aab587ad7`
    FOREIGN KEY (`id_talle`)
    REFERENCES `mydb`.`talles` (`id`),
  CONSTRAINT `FK_ef2da699-323f-46c8-98f6-6282e3be8efe`
    FOREIGN KEY (`id_marca`)
    REFERENCES `mydb`.`brand` (`id`),
  CONSTRAINT `FK_fbdbc21b-a531-483c-9cce-8f71e105dfe9`
    FOREIGN KEY (`id_subcategory`)
    REFERENCES `mydb`.`subcategories` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`detail_sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`detail_sales` (
  `id` INT(11) NOT NULL,
  `id_sales` INT(11) NOT NULL,
  `id_product` INT(11) NOT NULL,
  `quantity` INT(11) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `discount` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_b182e97e-9432-4650-be6f-5694930da147` (`id_product` ASC),
  CONSTRAINT `FK_b182e97e-9432-4650-be6f-5694930da147`
    FOREIGN KEY (`id_product`)
    REFERENCES `mydb`.`products` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`rol_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`rol_user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` TINYINT(4) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(60) NOT NULL,
  `email` VARCHAR(65) NOT NULL,
  `password` VARCHAR(70) NOT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  `address` VARCHAR(100) NULL DEFAULT NULL,
  `rol_id` INT(11) NULL DEFAULT NULL,
  `province` VARCHAR(100) NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `avatar` VARCHAR(100) NULL DEFAULT NULL,
  `dni` VARCHAR(15) NULL DEFAULT NULL,
  `postalcode` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_cfa2e5f5-2db1-4190-9889-121e4a1a9b2e` (`rol_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `FK_cfa2e5f5-2db1-4190-9889-121e4a1a9b2e`
    FOREIGN KEY (`rol_id`)
    REFERENCES `mydb`.`rol_user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`favorites` (
  `id` INT(11) NOT NULL,
  `id_product` INT(11) NOT NULL,
  `id_user` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_709ea25e-3d6a-454d-a850-e617e808564b` (`id_user` ASC),
  INDEX `FK_5776a3a3-c876-4e29-bc1a-3e83e8b66564` (`id_product` ASC),
  CONSTRAINT `FK_5776a3a3-c876-4e29-bc1a-3e83e8b66564`
    FOREIGN KEY (`id_product`)
    REFERENCES `mydb`.`products` (`id`),
  CONSTRAINT `FK_709ea25e-3d6a-454d-a850-e617e808564b`
    FOREIGN KEY (`id_user`)
    REFERENCES `mydb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `mydb`.`sales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`sales` (
  `id` INT(11) NOT NULL,
  `id_detail_sale` INT(11) NOT NULL,
  `id_user` INT(11) NOT NULL,
  `factura` VARCHAR(30) NULL DEFAULT NULL,
  `final_price` TINYINT(4) NOT NULL,
  `date_sales` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_13966a88-d65e-45b5-96d9-4a6ed5658d95` (`id_user` ASC),
  INDEX `FK_50518218-f081-4a17-8a0d-45c57328a539` (`id_detail_sale` ASC),
  CONSTRAINT `FK_13966a88-d65e-45b5-96d9-4a6ed5658d95`
    FOREIGN KEY (`id_user`)
    REFERENCES `mydb`.`users` (`id`),
  CONSTRAINT `FK_50518218-f081-4a17-8a0d-45c57328a539`
    FOREIGN KEY (`id_detail_sale`)
    REFERENCES `mydb`.`detail_sales` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
