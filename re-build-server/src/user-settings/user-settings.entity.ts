import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class UserSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  sendApplication: boolean;

  @Column({ nullable: true })
  smtpHost: string;

  @Column({ nullable: true })
  smtpUserName: string;

  @Column({ nullable: true })
  smtpPassword: string;

  @Column({ nullable: true })
  smtpPort: string;

  @Column()
  llmAuthKey: string;

  @Column({
    default: 'GPT-3',
    type: 'enum',
    enum: ['GPT-3', 'GPT-4', 'GEMINI', 'GEMINI-PRO', 'CLAUD-3'],
  })
  llmModel: string;

  @OneToOne(() => User, (user) => user.userSettings)
  @JoinColumn()
  user: User;
}
