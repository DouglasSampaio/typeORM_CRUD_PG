import { getRepository } from 'typeorm';
import  {profile_scales}  from '../entity/profile_scales';
import { Request, Response } from 'express';

export const getProfiles = async(req:Request, res: Response)=>{
    const scale = await getRepository(profile_scales).find();
    return res.json(scale)
};

export const getProfile  = async(req:Request, res: Response)=>{
    const {id} = req.params
    const scale = await getRepository(profile_scales).findOne(id)
    return res.json(scale)
};

export const createProfile = async(request: Request, response: Response)=>{
    const scale = await getRepository(profile_scales).save(request.body);
    response.json(scale)
}

export const updateTask = async(request: Request, response: Response)=>{
    const {id} = request.params

    const task = await getRepository(profile_scales).update(id, request.body)
    if(task.affected === 1){
        const taskUpdated = await getRepository(profile_scales).findOne(id)
        return response.json(taskUpdated)
    }

    return response.status(404).json({message: "Task nao encontrada!"})
}