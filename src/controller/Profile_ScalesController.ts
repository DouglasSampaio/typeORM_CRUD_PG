import { getRepository } from 'typeorm';
import  {profile_scales}  from '../entity/profile_scales';
import { Request, Response } from 'express';

export const getProfiles = async(req:Request, res: Response)=>{
    const perfil = await getRepository(profile_scales).find({order:{id:"ASC"}});
    return res.json(perfil)
};

export const getProfile  = async(req:Request, res: Response)=>{
    const {id} = req.params
    const perfil = await getRepository(profile_scales).findOne(id)
    return res.json(perfil)
};

export const createProfile = async(request: Request, response: Response)=>{
    const perfil = await getRepository(profile_scales).save(request.body);
    response.status(200).json(perfil)
}

export const updateProfile = async(request: Request, response: Response)=>{
    const {id} = request.params

    const perfil = await getRepository(profile_scales).update(id, request.body)
    if(perfil.affected === 1){
        const perfilUpdated = await getRepository(profile_scales).findOne(id)
        return response.json(perfilUpdated)
    }

    return response.status(404).json({message: "Perfil nao encontrado!"})
}