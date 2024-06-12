import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map((e) => {
          const field = e.path.join('.');
          return `${field}: ${e.message}`;
        });
        throw new BadRequestException(formattedErrors);
      }
      throw new BadRequestException('Validation failed');
    }
  }
}
