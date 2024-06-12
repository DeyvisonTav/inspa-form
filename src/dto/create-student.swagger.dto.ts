import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentSwaggerDto {
  @ApiProperty({ example: 'John Doe' })
  fullName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ example: '(81) 99999-9999' })
  phone: string;

  @ApiProperty({ example: '123 rua da minha casa' })
  street: string;

  @ApiProperty({ example: 'Limoeiro' })
  city: string;

  @ApiProperty({ example: 'PE' })
  state: string;

  @ApiProperty({ example: '55700-000' })
  postalCode: string;

  @ApiProperty({
    example: 'I am passionate about programming and want to improve my skills.',
  })
  about: string;

  @ApiProperty({ example: 'I want to learn more about web development.' })
  interest: string;
}
