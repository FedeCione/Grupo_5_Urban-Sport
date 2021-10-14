CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(45) NOT NULL,
   `description` VARCHAR(800),
   `price` DECIMAL(10,2),
   `discount` INT(11),
   `id_subcategory` INT(11) NOT NULL,
   `visible` TINYINT(2) NOT NULL,
   `stock` INT(11),
   `id_marca` INT(11) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `images` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100),
   `productId` INT(11) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colour_product` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `id_colour` INT(11) NOT NULL,
   `id_product` INT(11) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colours` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(55),
   PRIMARY KEY (`id`)
);

CREATE TABLE `talle_product` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `id_talle` INT(11) NOT NULL,
   `id_product` INT(11) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `talles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `talle` VARCHAR(45),
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(45) NOT NULL,
   `last_name` VARCHAR(65),
   `email` VARCHAR(70) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `phone` INT(45),
   `address` VARCHAR(125),
   `rol_id` TINYINT(2) NOT NULL,
   `province` VARCHAR(100),
   `city` VARCHAR(45),
   `avatar` VARCHAR(100),
   `dni` INT(15),
   `postalcode` INT(25),
   PRIMARY KEY (`id`)
);

CREATE TABLE `favorites` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `id_product` INT(11) NOT NULL,
   `id_user` INT(11) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sales` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `id_user` INT(11) NOT NULL,
   `factura` VARCHAR(100),
   `finalprice` DECIMAL(10,2),
   `date_sale` DATETIME,
   PRIMARY KEY (`id`)
);

CREATE TABLE `detail_sales` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `id_sales` INT(11) NOT NULL,
   `id_product` INT(11) NOT NULL,
   `quantity` INT(11),
   `price` DECIMAL(10,2),
   `discount` DECIMAL(10,2),
   PRIMARY KEY (`id`)
);

CREATE TABLE `brand` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(55),
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_452bae1c-f14a-4248-bbcc-6fffb804688b` FOREIGN KEY (`id_marca`) REFERENCES `brand`(`id`);

ALTER TABLE `images` ADD CONSTRAINT `FK_1d271d04-004a-44d2-8908-4dc80d52352f` FOREIGN KEY (`productId`) REFERENCES `products`(`id`);

ALTER TABLE `colour_product` ADD CONSTRAINT `FK_3e1f6daf-fbf6-4934-962e-b3401572bcea` FOREIGN KEY (`id_colour`) REFERENCES `colours`(`id`);

ALTER TABLE `colour_product` ADD CONSTRAINT `FK_23202f97-1c49-4ad5-8457-3f378d5625b3` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`);

ALTER TABLE `talle_product` ADD CONSTRAINT `FK_3de5c5dd-7815-416f-923e-f44a6eb021fe` FOREIGN KEY (`id_talle`) REFERENCES `talles`(`id`);

ALTER TABLE `talle_product` ADD CONSTRAINT `FK_c99942fa-3962-4af9-afe2-327b27452005` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`);

ALTER TABLE `favorites` ADD CONSTRAINT `FK_ee35dc2c-2507-46ed-8948-5e99e27a5fdd` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`);

ALTER TABLE `favorites` ADD CONSTRAINT `FK_656f30a4-5a1e-454e-a4f8-de51a27fd8e0` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`);

ALTER TABLE `sales` ADD CONSTRAINT `FK_789e5759-25cd-406f-8006-a44d8c609813` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`);

ALTER TABLE `detail_sales` ADD CONSTRAINT `FK_44b93024-8ad3-4757-9935-d14b04a424de` FOREIGN KEY (`id_sales`) REFERENCES `sales`(`id`);

ALTER TABLE `detail_sales` ADD CONSTRAINT `FK_0c69fd0f-38dd-4212-80ad-20972a719cd6` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`);
