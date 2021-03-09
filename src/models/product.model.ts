import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Brand } from "./brand.model";

@Entity("product")
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 256,
    nullable: false
  })
  name: string;

  @Column({
    length: 256,
    nullable: true
  })
  slug: string;

  @Column({
    length: 256,
    nullable: true
  })
  sku: string;

  @ManyToOne(() => Brand, brand => brand.products)
  brand: Brand;

  @CreateDateColumn({
    nullable: true
  })
  createdDate: Date;

  @UpdateDateColumn({
    nullable: true
  })
  modifiedDate: Date;
}