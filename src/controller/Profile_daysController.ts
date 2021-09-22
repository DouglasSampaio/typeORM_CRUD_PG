import { getRepository } from 'typeorm';
import  {profile_days}  from '../entity/profile_days';
import { Request, Response } from 'express';

export const getDays = async(req:Request, res: Response)=>{
    const scale = await getRepository(profile_days).find();
    return res.json(scale)
};

export const getDay  = async(req:Request, res: Response)=>{
    const {id} = req.params
    const scale = await getRepository(profile_days).findOne(id)
    return res.json(scale)
};

export const createDay = async(request: Request, response: Response)=>{
    const scale = await getRepository(profile_days).save(request.body);
    response.json(scale)
}

export const updateTask = async(request: Request, response: Response)=>{
    const {id} = request.params

    const task = await getRepository(profile_days).update(id, request.body)
    if(task.affected === 1){
        const taskUpdated = await getRepository(profile_days).findOne(id)
        return response.json(taskUpdated)
    }

    return response.status(404).json({message: "Task nao encontrada!"})
}