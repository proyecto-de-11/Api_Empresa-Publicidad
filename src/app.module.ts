import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';           // 👈 importa TypeORM
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';   // 👈 importa tu módulo Empresa

@Module({
  imports: [
    // ⚙️ Configuración de la conexión a SQL Server
     TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'clinica-citas-citas-clinica.f.aivencloud.com',
  port: 13208,
  username: 'avnadmin',
  password: 'AVNS_UwjsMWvAGtxyIq7qdg0',
  database: 'Empresa',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
}),
    EmpresaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
