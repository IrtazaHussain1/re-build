import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { UserSettings } from './user-settings.entity';
import {
  CreateUserSettingsDto,
  UpdateUserSettingsDto,
} from './dto/user-settings.dto';
import { User } from '../user/user.entity';

@Injectable()
export class UserSettingsRepository extends Repository<UserSettings> {
  constructor(private dataSource: DataSource) {
    super(UserSettings, dataSource.createEntityManager());
  }

  async createUserSettings(
    createUserSettingsDto: CreateUserSettingsDto,
    user: User,
  ): Promise<UserSettings> {
    const userSettings = this.create({
      ...createUserSettingsDto,
      user,
    });
    // Remove undefined properties
    Object.keys(userSettings).forEach(
      (key) => userSettings[key] === undefined && delete userSettings[key],
    );
    return this.save(userSettings);
  }

  async updateUserSettings(
    userId: number,
    updateUserSettingsDto: UpdateUserSettingsDto,
  ): Promise<UserSettings> {
    const userSettings = await this.findOne({
      where: { user: { id: userId } },
    });
    if (!userSettings) {
      return null;
    }
    Object.assign(userSettings, updateUserSettingsDto);
    return this.save(userSettings);
  }

  async findOneByUserId(userId: number): Promise<UserSettings | null> {
    return this.findOne({ where: { user: { id: userId } } });
  }

  async deleteUserSettings(userId: number): Promise<boolean> {
    const result = await this.delete({ user: { id: userId } });
    return result.affected > 0;
  }
}
