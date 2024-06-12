import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { StudentService } from '../services/student.service';
import { CreateStudentDto, CreateStudentSchema } from '../dto/student.dto';
import { CreateStudentSwaggerDto } from '../dto/create-student.swagger.dto';
import { ZodValidationPipe } from '../dto/pipe.zod';

@ApiTags('students')
@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @ApiOperation({ summary: 'Create student' })
  @ApiResponse({
    status: 201,
    description: 'The student has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @UsePipes(new ZodValidationPipe(CreateStudentSchema))
  @ApiBody({ type: CreateStudentSwaggerDto })
  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }

  @ApiOperation({ summary: 'Get all students' })
  @ApiResponse({ status: 200, description: 'Return all students.' })
  @Get()
  async findAll() {
    return this.studentService.findAllStudents();
  }

  @ApiOperation({ summary: 'Get student by ID' })
  @ApiResponse({ status: 200, description: 'Return the student by ID.' })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studentService.findStudentById(id);
  }

  @ApiOperation({ summary: 'Update student by ID' })
  @ApiResponse({
    status: 200,
    description: 'The student has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  @ApiBody({ type: CreateStudentSwaggerDto })
  @UsePipes(new ZodValidationPipe(CreateStudentSchema))
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: CreateStudentDto) {
    return this.studentService.updateStudent(id, data);
  }

  @ApiOperation({ summary: 'Delete student by ID' })
  @ApiResponse({
    status: 200,
    description: 'The student has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Student not found.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.studentService.deleteStudent(id);
  }
}
