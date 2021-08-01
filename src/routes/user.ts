import { Router } from 'express'
import User from '../entities/User';
import UserSettings from '../repositories/UserSettings';

const routerUser = Router();

routerUser.get('/', async (request, response) => {
  const users = await UserSettings.getAll();
  if (users.length == 0) {
    response.status(404).json({
      message: 'No users found'
    })
  } else {
    response.status(200).json(users);
  }
});

routerUser.get('/:id', async (request, response) => {
  const { id } = request.params;
  const user = await UserSettings.getById(id);
  if (!user) {
    response.status(404).json({
      message: 'No user found'
    });
  } else {
    response.status(200).json(user);
  }
});

routerUser.get('/launches/:id',  async (request, response) => {
  const { id } = request.params;

  routerUser.get(id);

  const launches = await UserSettings.recoverUserlaunches(id);
  console.log(launches);
  if (!launches) {
    response.status(404).json({
      message: 'No launches found'
    })
  } else {
    response.status(200).json(launches);
  }
});

routerUser.post('/', async (request, response) => {
  const { name, email } = request.body;
  const user = new User(name, email);
  const userCreate = await UserSettings.create(user);
  if (!userCreate) {
    response.status(404).json({
      message: 'User not created'
    })
  } else {
    response.status(201).json(userCreate);
  }
});

export default routerUser;