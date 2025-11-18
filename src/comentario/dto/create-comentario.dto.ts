import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateComentarioDto {
  @IsInt()
  publicacion_id: number;

  @IsInt()
  usuario_id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  texto: string;
}
