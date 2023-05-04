import { ConfigModule } from '@nestjs/config';

const envConfig = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath:
    process.env.npm_lifecycle_event === 'start:dev'
      ? './apps/data-provider/.env.development.local'
      : './apps/data-provider/.env',
});

export default envConfig;
