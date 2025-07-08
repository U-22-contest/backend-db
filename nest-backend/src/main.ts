import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,    //セッション情報の維持
    origin: 'http://localhost:3000',  //Nextjs
  })

  await app.listen(process.env.PORT ?? 4000); // Nestとらないために一時的に4000
}
void bootstrap();