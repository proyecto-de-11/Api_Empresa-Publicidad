import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';


export class CreateEmpresaDto {
@IsInt()
usuario_id: number;


@IsString()
@IsNotEmpty()
@MaxLength(100)
Nombre: string;


@IsOptional()
@IsString()
@MaxLength(50)
Tipo?: string;


@IsOptional()
@IsString()
@MaxLength(255)
Descripcion?: string;


@IsOptional()
@IsString()
@MaxLength(150)
Ubicacion?: string;


@IsOptional()
@IsString()
@MaxLength(100)
contactos?: string;


@IsOptional()
@IsString()
@MaxLength(100)
Correo?: string;


@IsOptional()
@IsString()
@MaxLength(255)
imagen?: string;
}