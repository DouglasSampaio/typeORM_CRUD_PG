import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { profile_scales } from './profile_scales';

@Entity()
export class profile_days {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    week_day: number;
    
    @Column()
    selected: boolean;

    @Column()
    beginTime: string;

    @Column()
    endTime: string;

    @ManyToOne(() => profile_scales, scale => scale)
    scale: profile_scales;

}