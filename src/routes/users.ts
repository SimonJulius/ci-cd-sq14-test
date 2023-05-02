import express from 'express';

import { createUser, getUsersByAge } from '../controller/UserController';
const router = express.Router();

/* GET users listing. */
router.post('/create-user', createUser);

router.get('/user-by-age', getUsersByAge);

export default router;
