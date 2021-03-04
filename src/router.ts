import { Router } from 'express';
import authMiddleware from './app/middlewares/authMidllewares';
import authController from './controllers/authController';
import UserController from './controllers/userController';

const router = Router();

router.post('/auth', authController.authenticate);
router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.getUsers);

export default router;