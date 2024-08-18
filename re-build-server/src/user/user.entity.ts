// src/entities/user.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { JobApplication } from '../job-application/job-applicatio.entity';
import { UserSettings } from 'src/user-settings/user-settings.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'bytea', nullable: true })
  defaultResume: Buffer;

  @OneToMany(() => JobApplication, (jobApplication) => jobApplication.user)
  jobApplications: JobApplication[];

  @OneToOne(() => UserSettings, (userSetting) => userSetting.user)
  userSetting: UserSettings;
}
