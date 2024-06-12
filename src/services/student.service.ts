import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateStudentDto } from '../dto/student.dto';
import { response } from 'express';
import { Student } from '@prisma/client';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async createStudent(data: CreateStudentDto): Promise<Student> {
    const emailExists = await this.prisma.student.findUnique({
      where: { email: data.email },
    });
    if (emailExists) {
      throw new HttpException(
        'O e-mail ja existe na nossa base de dados.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const student = await this.prisma.student.create({
      data: {
        about: data.about,
        city: data.city,
        email: data.email,
        fullName: data.fullName,
        interest: data.interest,
        phone: data.phone,
        postalCode: data.postalCode,
        state: data.state,
        street: data.street,
      },
    });
    return student;
  }

  async findAllStudents(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  async findStudentById(id: string): Promise<Student> {
    return this.prisma.student.findUnique({ where: { id } });
  }

  async updateStudent(id: string, data: CreateStudentDto): Promise<Student> {
    return this.prisma.student.update({ where: { id }, data });
  }

  async deleteStudent(id: string): Promise<Student> {
    return this.prisma.student.delete({ where: { id } });
  }
}
