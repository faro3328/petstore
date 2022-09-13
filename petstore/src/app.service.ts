import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGoodBye(): string {
    return 'Good Bye';
  }
}
