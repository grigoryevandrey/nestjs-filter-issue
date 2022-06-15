import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class GlobalFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    console.error(`Exception: ${JSON.stringify(exception)}`);

    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const message = 'Error has occurred.';

    const responseBody = { message };

    httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
  }
}
