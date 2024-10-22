import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity('accounts')
export class AccountsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  accountId: number;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ unique: true })
  gmail: string;
  @Column({ unique: true })
  phone: string;
  @Column()
  gender: boolean;
}
