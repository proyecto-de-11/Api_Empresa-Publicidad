import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity({ name: 'empresa' })
export class Empresa {
@PrimaryGeneratedColumn()
ID: number;


@Column()
usuario_id: number; // FK a la tabla usuarios (externa)


@Column({ length: 100 })
Nombre: string;


@Column({ length: 50, nullable: true })
Tipo: string;


@Column({ length: 255, nullable: true })
Descripcion: string;


@Column({ length: 150, nullable: true })
Ubicacion: string;


@Column({ length: 100, nullable: true })
contactos: string;


@Column({ length: 100, nullable: true })
Correo: string;


@Column({ length: 255, nullable: true })
imagen: string;
}