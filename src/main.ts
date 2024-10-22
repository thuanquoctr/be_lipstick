declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initData } from './DB/initData';
import { DataSource } from 'typeorm';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get(DataSource);
  await initData(dataSource);
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
