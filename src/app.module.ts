import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';           // 👈 importa TypeORM
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';   // 👈 importa tu módulo Empresa

@Module({
  imports: [
    // ⚙️ Configuración de la conexión a SQL Server
     TypeOrmModule.forRoot({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'nest_user',
  password: 'NestStrong123!',
  database: 'Empresa',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  options: { encrypt: false },
}),
    EmpresaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
