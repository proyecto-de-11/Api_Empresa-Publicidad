import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Empresa } from './empresa.entity';


@Module({
imports: [TypeOrmModule.forFeature([Empresa])],
providers: [EmpresaService],
controllers: [EmpresaController],
exports: [EmpresaService],
})
export class EmpresaModule {}