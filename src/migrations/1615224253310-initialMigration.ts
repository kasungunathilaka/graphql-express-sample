import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1615224253310 implements MigrationInterface {
    name = 'initialMigration1615224253310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(256) NOT NULL, `slug` varchar(256) NULL, `sku` varchar(256) NULL, `createdDate` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `modifiedDate` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `brandId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `brand` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(256) NOT NULL, `logoUrl` varchar(256) NULL, `createdDate` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `modifiedDate` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_bb7d3d9dc1fae40293795ae39d6` FOREIGN KEY (`brandId`) REFERENCES `brand`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.manager.createQueryBuilder()
            .insert()
            .into("brand")
            .values([
                { id: 1, name: "Nike" },
                { id: 2, name: "Adidas" },
                { id: 3, name: "Under Armour" }
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_bb7d3d9dc1fae40293795ae39d6`");
        await queryRunner.manager.createQueryBuilder()
            .delete()
            .from("brand")
            .execute();
        await queryRunner.query("DROP TABLE `brand`");
        await queryRunner.query("DROP TABLE `product`");
    }

}
