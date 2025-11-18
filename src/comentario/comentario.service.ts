import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './comentario.entity';

@Injectable()
export class ComentarioService {
  constructor(
    @InjectRepository(Comentario)
    private comentarioRepo: Repository<Comentario>,
  ) {}

  create(createDto: CreateComentarioDto) {
    const nuevo = this.comentarioRepo.create(createDto);
    return this.comentarioRepo.save(nuevo);
  }

  findAll() {
    return this.comentarioRepo.find();
  }

  findOne(id: number) {
    return this.comentarioRepo.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdateComentarioDto) {
    const comentario = await this.findOne(id);
    if (!comentario) throw new NotFoundException('Comentario no encontrado');
    await this.comentarioRepo.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const respuesta = await this.comentarioRepo.delete(id);
    if (respuesta.affected === 0)
      throw new NotFoundException('Comentario no encontrado');
    return { message: 'Comentario eliminado' };
  }
}
