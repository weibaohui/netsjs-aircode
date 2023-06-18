import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from '../common/http-exception.filter';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  exports: [CatsService],
})
export class CatsModule {}
