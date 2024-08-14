import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume } from './resume.entity';
import * as fs from 'fs';
import * as path from 'path';
import { PdfParser } from 'pdf-parse';
import * as docx from 'docx';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
  ) {}

  async generateResume(userId: string, originalResumePath: string, jobDescription: string) {
    // Extract text from original resume
    const originalResumeText = await this.extractTextFromResume(originalResumePath);

    // Construct Gemini prompt based on job description
    const prompt = `Generate a resume based on the following job description and existing resume: ${jobDescription} ${originalResumeText}`;

    // Call Gemini API with the prompt (implement Gemini API integration)
    const generatedResumeText = await this.callGeminiAPI(prompt);

    // Create a PDF document from the generated text
    const pdfDoc = new PDFDocument();
    pdfDoc.text(generatedResumeText);
    pdfDoc.pipe(fs.createWriteStream('generated_resume.pdf'));
    pdfDoc.end();

    // Save resume and metadata to database
    const resume = new Resume();
    resume.userId = userId;
    resume.originalResumePath = originalResumePath;
    resume.generatedResumePath = 'generated_resume.pdf'; // Replace with actual path
    resume.jobDescription = jobDescription;
    await this.resumeRepository.save(resume);

    return resume;
  }

  // ... other methods for file handling, Gemini API integration, etc.
}

