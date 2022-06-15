import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    throw new Error('Oops!');

    return 'OK';
  }
}
