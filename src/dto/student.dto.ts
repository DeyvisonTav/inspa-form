import { z } from 'zod';

export const CreateStudentSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  about: z.string().min(1, 'About section is required'),
  interest: z.string().min(1, 'Interest is required'),
});

export type CreateStudentDto = z.infer<typeof CreateStudentSchema>;

import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentSwaggerDto {
  @ApiProperty({ example: 'John Doe' })
  fullName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ example: '+1234567890' })
  phone: string;

  @ApiProperty({ example: '123 Main St' })
  street: string;

  @ApiProperty({ example: 'Springfield' })
  city: string;

  @ApiProperty({ example: 'IL' })
  state: string;

  @ApiProperty({ example: '62704' })
  postalCode: string;

  @ApiProperty({ example: 'USA' })
  country: string;

  @ApiProperty({
    example: 'I am passionate about programming and want to improve my skills.',
  })
  about: string;

  @ApiProperty({ example: 'I want to learn more about web development.' })
  interest: string;
}
