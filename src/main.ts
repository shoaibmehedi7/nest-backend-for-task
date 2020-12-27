import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT||4000);
  Logger.log("App Started successfully")
}
bootstrap();
