import { Router } from 'express';
import Launch from '../entities/Launch';
import LaunchSettings from '../repositories/LaunchSettings';
import UserSettings from '../repositories/UserSettings';

const routerLaunch = Router();

routerLaunch.post('/', async (request, response) => {
  const { userId, value, description, date } = request.body;
  const user = await UserSettings.getById(userId);
  if (!user) {
    return response.status(404).json({
      message: 'User not found',
    });
  } else {
    const launch = new Launch(value, description, date, user);
    const launchCreate = await LaunchSettings.create(launch);
    response.json(launchCreate);
  }
});

export default routerLaunch;