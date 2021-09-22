import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { profile_days } from './profile_days'
import { users_scales } from './users_scales'

@Entity()
export class profile_scales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    login_tolerance: number;

    @OneToMany(() => profile_days, daysWeek => daysWeek)
    daysWeeks: profile_days[];

    @OneToMany(() => users_scales, usersScale => usersScale)
    usersScales: users_scales[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}