import { getRepository } from 'typeorm';
import  {profile_days}  from '../entity/profile_days';
import { Request, Response } from 'express';

export const getDaysId = async(req:Request, res: Response)=>{
    const {scale} = req.params
    const dias = await getRepository(profile_days).find({where:{scale},order:{id:"ASC"}});
    return res.json(dias)
};
export const getDays = async(req:Request, res: Response)=>{
    const dias = await getRepository(profile_days).find({order:{id:"ASC"}});
    return res.json(dias)
};

export const getDayIdActived  = async(req:Request, res: Response)=>{
    const {scale} = req.params
    const dias = await getRepository(profile_days).find({where:{scale, selected:true},order:{id:"ASC"}});
    return res.json(dias)
};

export const createDay = async(request: Request, response: Response)=>{
    const createDay = await getRepository(profile_days).save(request.body);
    response.json(createDay)
}

export const updateDays = async(request: Request, response: Response)=>{
    const {id} = request.params
    const updateDays = await getRepository(profile_days).update(id, request.body)
    if(updateDays.affected === 1){
        const dayUpdated = await getRepository(profile_days).findOne(id)
        return response.json(dayUpdated)
    }

    return response.status(404).json({message: "Dia nao encontrado!"})
}