import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000).then(() => {
    console.log(
      `server is running of port ${process.env.PORT || 3000} check health at http://localhost:${process.env.PORT}/health`,
    );
  });
}
bootstrap();
