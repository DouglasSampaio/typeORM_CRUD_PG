import { Router} from 'express';
import {
    createDay,
    getDaysId,
    getDays,
    getDayIdActived,
    updateDays
} from './controller/Profile_daysController'

import {
    createProfile,
    getProfiles,
    getProfile,
    updateProfile
} from './controller/Profile_ScalesController'

import {
    createUser,
    getUserLogin,
    getUsers,
    updateUser
} from './controller/UserControler'
import {
    getUsersByProfile,
    getUserProfile,
    associateUserProfile
} from './controller/Users_scaleController'
const routes = Router();


routes.post('/saveProfile', createProfile);
routes.get('/profiles/:id', getProfile);
routes.get('/profiles', getProfiles);
routes.put('/profile/:id', updateProfile);


routes.post('/daysWeek', createDay);
routes.get('/daysId/:scale', getDaysId)
routes.get('/daysIdActived/:scale', getDayIdActived)
routes.get('/days', getDays)
routes.put('/updateDay/:id', updateDays)


routes.post('/saveUser', createUser);
routes.get('/user/:login', getUserLogin);
routes.get('/users', getUsers);
routes.put('/user/:id', updateUser);

routes.post('/saveUserProfile', associateUserProfile);
routes.get('/listUserProfileID/:scale', getUsersByProfile);
routes.get('/listUsersProfile', getUserProfile);



export default routes;