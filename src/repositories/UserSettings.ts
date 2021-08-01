import { getManager } from 'typeorm';
import User from '../entities/User';

export default class UserSettings {
  public static async getAll() {
    const users = await getManager().find(User);
    return users;
  }

  public static async getById(id: string) {
    const user = await getManager().findOne(User, id);
    return user;
  }

  public static async create(user: User) {
    const newUser = await getManager().create(User, user);
    const userSave = await getManager().save(newUser);
    return userSave;
  }

  public static async recoverUserlaunches(id: string) {
    const user = await getManager().findOne(User, id, {
      relations: ['launches']
    });
    return user.launches;
  }
}
