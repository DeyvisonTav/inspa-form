import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateStudentDto } from '../dto/student.dto';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async createStudent(data: CreateStudentDto) {
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

  async findAllStudents() {
    return this.prisma.student.findMany();
  }

  async findStudentById(id: string) {
    return this.prisma.student.findUnique({ where: { id } });
  }

  async updateStudent(id: string, data: CreateStudentDto) {
    return this.prisma.student.update({ where: { id }, data });
  }

  async deleteStudent(id: string) {
    return this.prisma.student.delete({ where: { id } });
  }
}
