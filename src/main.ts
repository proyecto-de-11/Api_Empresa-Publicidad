import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // 👈 importa esto

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Permite solicitudes desde cualquier origen
  }); // 👈 habilita CORS

  // ✅ habilita validaciones globales para los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,   // ignora propiedades no definidas en el DTO
      transform: true,   // convierte tipos automáticamente (por ejemplo, strings a números)
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Servidor corriendo en: http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
