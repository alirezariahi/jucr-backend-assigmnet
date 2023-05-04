import { ConfigModule } from '@nestjs/config';

const envConfig = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: './apps/station/.env',
});

export default envConfig;
