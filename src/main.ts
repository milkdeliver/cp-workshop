import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.set('port', process.env.PORT || 8080);
  console.log(process.env.PORT)
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
