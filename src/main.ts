import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Student Registration API')
    .setDescription('API for student registration')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);

  app.useStaticAssets(join(__dirname, '..', 'node_modules', 'swagger-ui-dist'));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}
bootstrap();
