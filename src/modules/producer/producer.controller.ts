import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Controller()
export class ProducerController {
  constructor() {}
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'kafka-tutorial',
        brokers: ['38.242.132.213:9092'],
      },
      consumer: {
        groupId: 'my-kafka',
      },
    },
  })
  client: ClientKafka;
  async onModuleInit() {
    this.client.subscribeToResponseOf('kafka-tutorial');
    await this.client.connect();
  }

  @Get()
  async getHello() {
    return await this.client.send('kafka-tutorial', 'Hello Kafka toturial');
  }
}
