import { Gamme } from 'src/gamme/entities/gamme.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Analyse {

    /** 
   * ce décorateur aidera à générer automatiquement l'identifiant de la table. 
   */ 

@PrimaryGeneratedColumn ()
id : number;

@Column({ type: 'varchar', length: 30 })
code: string;

@Column({ type: 'varchar', length: 30 })
libelle: string;

@Column({ type: 'varchar', length: 30 })
theme: string;

@Column({ type: 'varchar', length: 30 })
clt: string;

@Column({ type: 'varchar', length: 30 })
qt: string;

@Column({ type: 'varchar', length: 30 })
nbr: string;

 /* @Column()
date: Date;  */

@Column({ type: 'varchar', length: 30 })
cmt: string;



}


