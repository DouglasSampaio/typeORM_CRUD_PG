import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { users_scales } from './users_scales';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name!:string;

    @Column({
        unique: true
      })
      login!: string;

    @OneToMany(() => users_scales, user => user)
    user: users_scales[];

}