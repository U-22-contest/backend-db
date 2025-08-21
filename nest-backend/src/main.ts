import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import * as path from 'path';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(path.join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/'
  });

  app.enableCors({
    credentials: true,    //セッション情報の維持
    origin: 'http://localhost:3000',  //Nextjs
  })

  const config = new DocumentBuilder()
      .setTitle("API Documentation")
      .setDescription("プロジェクトのAPI仕様書")
      .setVersion("1.0")
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 4000); // Nestとらないために一時的に4000
}
void bootstrap();