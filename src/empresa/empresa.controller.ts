import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';


@Controller('empresa')
export class EmpresaController {
constructor(private readonly empresaService: EmpresaService) {}


@Post()
create(@Body() createDto: CreateEmpresaDto) {
return this.empresaService.create(createDto);
}


@Get()
findAll() {
return this.empresaService.findAll();
}


@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
return this.empresaService.findOne(id);
}


@Put(':id')
update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateEmpresaDto) {
return this.empresaService.update(id, updateDto);
}


@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number) {
return this.empresaService.remove(id);
}
}