import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsEntity } from 'src/entities/accounts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountsEntity])],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
