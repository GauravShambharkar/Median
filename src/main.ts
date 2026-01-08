import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //: Swagger initialising from here
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API Documentatin')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //: app listen should be after the swagger initailised on the server

  await app.listen(process.env.PORT || 3000).then(() => {
    console.log();
    console.log(
      `server is running of port ${process.env.PORT || 3000} check health at http://localhost:${process.env.PORT}/health`,
    );
    console.log();
    console.log(
      `API Documentation on http://localhost:${process.env.PORT || 3000}/api`,
    );
  });
}
bootstrap();
