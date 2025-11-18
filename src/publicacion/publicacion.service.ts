import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publicacion } from './publicacion.entity';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';

@Injectable()
export class PublicacionService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly repo: Repository<Publicacion>,
  ) {}

  create(dto: CreatePublicacionDto) {
    const nueva = this.repo.create(dto as any);
    return this.repo.save(nueva);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const pub = await this.repo.findOne({ where: { ID: id } });
    if (!pub) throw new NotFoundException(`Publicación con id ${id} no existe`);
    return pub;
  }

  async update(id: number, dto: UpdatePublicacionDto) {
    const pub = await this.findOne(id);
    Object.assign(pub, dto);
    return this.repo.save(pub);
  }

  async remove(id: number) {
    const res = await this.repo.delete(id);
    if (res.affected === 0)
      throw new NotFoundException(`Publicación con id ${id} no existe`);
  }
}
