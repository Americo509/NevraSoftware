import {
  Column,
  Entity,
} from 'typeorm';

@Entity({ name: 'usuario' })
export class UserEntity {
  @Column({ length: 100, type: 'varchar', nullable: false })
  codProduto: string;

  @Column({ length: 100, type: 'varchar', nullable: false })
  descricaoResumida: string;

  @Column({ length: 500, type: 'varchar', nullable: false })
  descricaoCompleta: string;
}
