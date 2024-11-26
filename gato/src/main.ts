import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Incia swagger
  const config = new DocumentBuilder()
      .setTitle('Timeboxing')
      .setDescription('API que permite gestionar tiempos en actividades personales')
      .setVersion('1.0')
      .addTag('timeboxing')
      .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  //Termina swagger
  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
