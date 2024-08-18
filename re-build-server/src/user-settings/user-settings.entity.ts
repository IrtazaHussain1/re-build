import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class UserSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  smtpHost: string;

  @Column()
  smtpUserName: string;

  @Column()
  smtpPassword: string;

  @Column()
  smtpPort: string;

  @Column()
  llmAuthKey: string;

  @OneToOne(() => User, (user) => user.jobApplications)
  user: User;
}
