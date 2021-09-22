import { getRepository } from 'typeorm';
import  {User}  from '../entity/User';
import { Request, Response } from 'express';

export const getUserLogin = async(req:Request, res: Response)=>{
    const {login} = req.params
    const user = await getRepository(User).find({where:{login},order:{id:"ASC"}});
    return res.json(user)
};
export const getUsers = async(req:Request, res: Response)=>{
    const users = await getRepository(User).find({order:{id:"ASC"}});
    return res.json(users)
};


export const createUser = async(req: Request, response: Response)=>{
    
    const findUserLogin = await getRepository(User).count({login:req.body.login});
    if(findUserLogin===1){
        return response.status(401).json({message:"Login já existente"})
    }
    const createUser = await getRepository(User).save(req.body);
    response.json(createUser)
}

export const updateUser = async(request: Request, response: Response)=>{
    const {id} = request.params

    
    const userId = await getRepository(User).findOne(id)
    if(!userId){
        return response.status(404).json({message: "Usuario nao encontrado!"})
    }
    if(userId.login==request.body.login){
        const updateUsers = await getRepository(User).update(id, request.body)
        if(updateUsers.affected === 1){
            const userUpdated = await getRepository(User).findOne(id)
            return response.json(userUpdated)
        }
    }   
    const findUserLogin = await getRepository(User).count({login:request.body.login});
    if(findUserLogin===1){
        return response.status(401).json({message:"Login já existente"})
    }

    const updateUsers = await getRepository(User).update(id, request.body)
    if(updateUsers.affected === 1){
        const userUpdated = await getRepository(User).findOne(id)
        return response.json(userUpdated)
    }

    
}