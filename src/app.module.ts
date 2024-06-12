import { Module } from '@nestjs/common';
import { StudentModule } from './modules/student.module';
import { DataModule } from './modules/data.module';

@Module({
  imports: [DataModule, StudentModule],
})
export class AppModule {}
