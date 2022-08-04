import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';

@Module({
  imports: [],
  controllers: [ProducerController],
})
export class ProducerModule {}
