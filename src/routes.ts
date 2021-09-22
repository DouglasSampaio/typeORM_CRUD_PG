import { Router, Request, Response } from 'express';
import { getTasks, saveTask, getTask, updateTask } from './controller/TasksController'
import {createProfile} from './controller/Profile_ScalesController'
import {createDay} from './controller/Profile_daysController'
import {salvar} from './controller/UserController'
import {salvarPhoto} from './controller/PhotoController'
const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Ola!!' })
});


routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.post('/profile', createProfile);
routes.post('/user', salvar);
routes.post('/photo', salvarPhoto);
routes.post('/daysWeek', createDay);
routes.put('/tasks/:id', updateTask);
export default routes;