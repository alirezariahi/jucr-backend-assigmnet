import { Injectable, OnModuleInit } from '@nestjs/common';
import * as cron from 'node-cron';

@Injectable()
export class CronService implements OnModuleInit {
  onModuleInit() {
    this.setupCronJob();
  }

  setupCronJob() {
    cron.schedule('1 * * * *', () => {
      console.log('Running a job every minute');
    });
  }
}
