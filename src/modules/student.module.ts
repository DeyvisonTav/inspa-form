import { Module } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { StudentController } from '../controller/student.controller';

@Module({
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
