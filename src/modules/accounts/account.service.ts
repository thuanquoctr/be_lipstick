import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountDto } from 'src/dto/account.dto';
import { AccountsEntity } from 'src/entities/accounts.entity';
import { Account } from 'src/models/account.model';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(AccountsEntity) private accountRepository: Repository<AccountsEntity>) {}
  async getAccounts(): Promise<Account[]> {
    return await this.accountRepository.find();
  }
  async create(accountDto: AccountDto): Promise<Account> {
    return await this.accountRepository.save(accountDto);
  }
}
