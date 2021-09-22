import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { profile_scales } from './profile_scales';
import { User } from './User';

@Entity('users_scales')
export class users_scales{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => profile_scales, scale => scale)
    scale: profile_scales;

    @ManyToOne(() => User, user => user)
    user: User;
}