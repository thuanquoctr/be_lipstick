import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './modules/accounts/account.module';
import { AccountsEntity } from './entities/accounts.entity';
import { ProductsEntity } from './entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: 'lipstick',
      entities: [AccountsEntity, ProductsEntity],
      synchronize: true,
    }),
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
