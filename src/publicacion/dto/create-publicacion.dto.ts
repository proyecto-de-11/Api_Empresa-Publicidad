import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, IsNumber } from 'class-validator';

export class CreatePublicacionDto {
  @IsInt()
  empresa_id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  titulo: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  descripcion?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  imagen?: string;

  @IsOptional()
  @IsNumber()
  precio?: number;
}
