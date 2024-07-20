import { HttpException, HttpStatus } from '@nestjs/common';
import { catchError, Observable, throwError, timeout } from 'rxjs';

export class Service_helper {
  constructor() { }

  sendCmd(cmd: Observable<any>) {
    return cmd.pipe(
      timeout(10000),
      catchError((errors) =>
        throwError(() => {
          console.log(errors);
          if (!errors.statusCode) {
            return new HttpException(
              {
                message: 'Service unavailable',
                error: 'Service unavailable',
                statusCode: HttpStatus.SERVICE_UNAVAILABLE,
              },
              HttpStatus.SERVICE_UNAVAILABLE,
            );
          } else {
            return new HttpException(errors, errors.statusCode);
          }
        }),
      ),
    );
  }
}
