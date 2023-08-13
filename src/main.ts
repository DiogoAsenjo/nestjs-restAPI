import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Quando você configura o ValidationPipe com whitelist: true, isso indica que o ValidationPipe vai permitir apenas as propriedades que têm decorações específicas em classes DTO (Data Transfer Object).
  }));
  await app.listen(3333);
}
bootstrap();
