import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('products')
export class ProductsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  productId: number;
  @Column()
  productName: string;
  @Column()
  price: string;
  @Column()
  descriptoion: string;
  @Column()
  view: number;
  @Column()
  countBuy: number;
}
