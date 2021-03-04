import { Router } from 'express';
import authController from './controllers/authController';
import UserController from './controllers/userController';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', authController.authenticate);

export default router;