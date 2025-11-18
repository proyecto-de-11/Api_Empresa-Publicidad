import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacion } from './publicacion.entity';
import { PublicacionService } from './publicacion.service';
import { PublicacionController } from './publicacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Publicacion])],
  providers: [PublicacionService],
  controllers: [PublicacionController],
  exports: [PublicacionService],
})
export class PublicacionModule {}
