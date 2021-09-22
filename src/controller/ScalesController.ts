// import { getRepository } from 'typeorm';
// import  {Scales}  from '../entity/Scales';
// import { Request, Response } from 'express';

// export const getScales = async(req:Request, res: Response)=>{
//     const scale = await getRepository(Scales).find();
//     return res.json(scale)
// };

// export const getScale = async(req:Request, res: Response)=>{
//     const {id} = req.params
//     const scale = await getRepository(Scales).findOne(id)
//     return res.json(scale)
// };

// export const createScale = async(request: Request, response: Response)=>{
//     const scale = await getRepository(Scales).save(request.body);
//     response.json(scale)
// }

// export const updateScale = async(request: Request, response: Response)=>{
//     const {id} = request.params

//     const task = await getRepository(Scales).update(id, request.body)
//     if(task.affected === 1){
//         const taskUpdated = await getRepository(Scales).findOne(id)
//         return response.json(taskUpdated)
//     }

//     return response.status(404).json({message: "Task nao encontrada!"})
// }