import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comentario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  publicacion_id: number;

  @Column()
  usuario_id: number;

  @Column({ length: 255 })
  texto: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
