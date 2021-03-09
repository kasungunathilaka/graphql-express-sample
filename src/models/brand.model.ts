import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.model";

@Entity("brand")
export class Brand {

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
  logoUrl: string;

  @OneToMany(() => Product, product => product.brand)
  products: Product[];

  @CreateDateColumn({
    nullable: true
  })
  createdDate: Date;

  @UpdateDateColumn({
    nullable: true
  })
  modifiedDate: Date;
}