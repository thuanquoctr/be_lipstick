import { AccountsEntity } from 'src/entities/accounts.entity';
import { DataSource } from 'typeorm';
export async function initData(dataSource: DataSource) {
  const accountsRepo = dataSource.getRepository(AccountsEntity);
  const accountsSampleData = accountsRepo.create([
    { username: 'admin', password: '123', gmail: 'admin@gmail.com', phone: '123456789', gender: true },
    { username: 'user', password: '456', gmail: 'user@gmail.com', phone: '987654321', gender: false },
  ]);

  await accountsRepo.save(accountsSampleData);
}
