import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ResponseData } from 'src/global/globalClass';
import { Account } from 'src/models/account.model';
import { AccountService } from './account.service';
import { Response } from 'express';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { ResponseType } from 'src/global/globalType';
import { AccountDto } from 'src/dto/account.dto';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Get()
  async getAccounts(@Res() res: Response): Promise<ResponseType<Account[]>> {
    try {
      return res.json(new ResponseData(await this.accountService.getAccounts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS));
    } catch (error) {
      return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR));
    }
  }
  @Post()
  async create(@Body() accountDto: AccountDto, @Res() res: Response): Promise<ResponseType<Account>> {
    try {
      return res.json(new ResponseData(await this.accountService.create(accountDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS));
    } catch (error) {
      return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR));
    }
  }
}
