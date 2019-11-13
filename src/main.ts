import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.set('port', process.env.PORT || 8080);
  console.log(process.env.PORT)
  
  const options = new DocumentBuilder()
  .setTitle('App example')
  .setDescription('The App API description')
  .setVersion('1.0')
  .addTag('apps')
  .build();
  const appDocument = SwaggerModule.createDocument(app, options, { include: [AppModule] });
  SwaggerModule.setup('docs', app, appDocument);
  
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
