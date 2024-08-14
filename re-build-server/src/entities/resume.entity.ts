import { Entity, Column, PrimaryGeneratedColumn, ObjectId } from 'typeorm';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  originalResumePath: string;

  @Column()
  generatedResumePath: string;

  @Column()
  jobDescription: string;

  // Other fields as needed
}

