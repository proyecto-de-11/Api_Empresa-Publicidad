import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EmpresaModule } from './empresa/empresa.module';
import { PublicacionModule } from './publicacion/publicacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'clinica-citas-citas-clinica.f.aivencloud.com',
      port: 13208,
      username: 'avnadmin',
      password: 'AVNS_UwjsMWvAGtxyIq7qdg0',
      database: 'Empresa',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // ⚠ crea tablas automáticamente
    }),

    EmpresaModule,
    PublicacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}