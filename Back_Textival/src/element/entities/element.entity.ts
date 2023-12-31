import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Element {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 30 })
    code: string;
    @Column({ type: 'varchar', length: 30 })
    libelle: string;
}
