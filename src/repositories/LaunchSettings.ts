import { getManager } from 'typeorm';
import Launch from '../entities/Launch';

export default class LaunchSettings {
  public static async getAll() {
    const launches = await getManager().find(Launch);
    return launches;
  }

  public static async getById(id: string) {
    const launch = await getManager().findOne(Launch, id);
    return launch;
  }

  public static async create(launch: Launch) {
    const newLaunch = getManager().create(Launch, launch);
    const result = await getManager().save(newLaunch);
    return result;
  }
}
