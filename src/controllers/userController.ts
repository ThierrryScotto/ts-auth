import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../app/models/User';

class UserController{
  public async store(req: Request, res: Response) {
    const repository = getRepository(User);
  
    const { email, password } = req.body;

    const userExists = await repository.findOne({ where: { email }});
    if (userExists) {
      return res.sendStatus(409);
    }

    const user = await repository.create({ email, password });
    await repository.save(user);

    return res.status(201).json(user);
  }
}

export default new UserController();