import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100, type: 'varchar', nullable: false })
  name: string;

  @Column({ length: 100, type: 'varchar', nullable: false })
  email: string;

  @Column({ length: 100, type: 'varchar', nullable: false })
  password: string;
}
