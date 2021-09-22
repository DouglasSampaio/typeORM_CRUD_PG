import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Photo} from "../entity/Photo";


export const salvarPhoto = async(request: Request, response: Response)=>{
    const task = await getRepository(Photo).save(request.body);
    response.json(task)
}
    // private userRepository = getRepository(User);

    // async all(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.find();
    // }

    // async one(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.findOne(request.params.id);
    // }

    //  async salvar(request: Request, response: Response) {
    //     return this.userRepository.save(request.body);
    // }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOne(request.params.id);
    //     await this.userRepository.remove(userToRemove);
    // }

