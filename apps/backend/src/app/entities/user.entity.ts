import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuario' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100, type: 'varchar', nullable: false })
  name: string;

  @Column({ length: 100, type: 'varchar', nullable: false })
  email: string;

  @Column({ length: 100, type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'numeric', nullable: false })
  cep: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;
}
