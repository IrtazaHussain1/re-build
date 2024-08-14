// src/resume/resume.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post('generate')
  @UseInterceptors(FileInterceptor('resume'))
  async generateResume(@UploadedFile() resume: Express.Multer.File, @Body('jobDescription') jobDescription: string) {
    // Save uploaded resume to a temporary location
    const originalResumePath = `uploads/${resume.filename}`;
    fs.writeFileSync(originalResumePath, resume.buffer);

    // Call resume service to generate resume
    const generatedResume = await this.resumeService.generateResume(userId, originalResumePath, jobDescription);

    // Return generated resume or a success message
    return generatedResume;
  }
}

