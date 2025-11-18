import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'publicacion' })
export class Publicacion {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  empresa_id: number; // FK hacia la tabla empresa

  @Column({ length: 255 })
  titulo: string;

  @Column({ length: 500, nullable: true })
  descripcion: string;

  @Column({ length: 255, nullable: true })
  imagen: string;

  @Column({ nullable: true })
  precio: number;

  @Column({ type: 'datetime', default: () => "CURRENT_TIMESTAMP" })
fecha_publicacion: Date;

}
