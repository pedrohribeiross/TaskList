import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Todas as rotas que estão abaixo, passarão pelo Middleware.
routes.use(authMiddleware);

routes.get('/tasks', TaskController.index);

routes.post('/tasks', TaskController.store);

routes.put('/users', UserController.update);
routes.put('/tasks/:task_id', TaskController.update);

routes.delete('/tasks/:task_id', TaskController.delete);

export default routes;
