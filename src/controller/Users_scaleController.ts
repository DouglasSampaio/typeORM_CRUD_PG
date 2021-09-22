import { getRepository } from 'typeorm';
import  {users_scales}  from '../entity/users_scales';
import { Request, Response } from 'express';

export const getUsersByProfile = async(req:Request, res: Response)=>{
    const {scale} = req.params
    //const user = await getRepository(users_scales).find({where:{scale},relations: ["scale", "user"],order:{id:"ASC"}});
    const user = await getRepository(users_scales).find({where:{scale},relations: [ "user"],order:{id:"ASC"}});

    return res.json(user)
};
export const getUserProfile = async(req:Request, res: Response)=>{
    const users = await getRepository(users_scales).find({relations: ["scale", "user"],order:{id:"ASC"}});
    //console.log(users[0])
    return res.json(users)
};


export const associateUserProfile = async(req: Request, response: Response)=>{
    try {  
    const verifyAssociate = await getRepository(users_scales).find({["user"]:req.body.user});
    //console.log(verifyAssociate.length)
    if(verifyAssociate.length>0){
      return response.status(400).json({message:"Usuario já esta em uma escala"})
    }
    const createUser = await getRepository(users_scales).save(req.body);
    response.json(createUser)
}
  catch(error) {

    return response.status(404).json({message:"Usuario não existe"})
  }
}
    
