import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class JobApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalResumePath: string;

  @Column()
  generatedResumePath: string;

  @Column()
  generatedCoverLetter: string;

  @Column()
  emailMessage: string;

  @Column()
  companyName: string;

  @Column()
  recruiterEmail: string;

  @Column()
  jobTitle: string;

  @Column()
  jobDescription: string;

  @ManyToOne(() => User, (user) => user.jobApplications)
  user: User;
}
