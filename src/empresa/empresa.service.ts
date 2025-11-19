import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';


@Injectable()
export class EmpresaService {
constructor(
@InjectRepository(Empresa)
private readonly empresaRepo: Repository<Empresa>,
) {}


async create(createDto: CreateEmpresaDto): Promise<Empresa> {
const empresa = this.empresaRepo.create(createDto);
return this.empresaRepo.save(empresa);
}


async findAll(): Promise<Empresa[]> {
return this.empresaRepo.find();
}


async findOne(id: number): Promise<Empresa> {
const e =  await this.empresaRepo.findOneBy({usuario_id: id} as any);

if (!e) throw new NotFoundException(`Empresa con id ${id} de usario no encontrada`);
return e;
}


async update(id: number, updateDto: UpdateEmpresaDto): Promise<Empresa> {
const empresa = await this.empresaRepo.findOneBy({ID: id} as any);

if (!empresa) throw new NotFoundException(`Empresa con id ${id} no encontrada`);
this.empresaRepo.merge(empresa, updateDto);

return this.empresaRepo.save(empresa);
}


async remove(id: number): Promise<void> {
const res = await this.empresaRepo.delete(id);
if (res.affected === 0) throw new NotFoundException(`Empresa con id ${id} no encontrada`);
}
}