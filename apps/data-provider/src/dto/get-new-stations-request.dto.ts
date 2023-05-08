import { IsDateString, IsString, IsOptional } from 'class-validator';
export class GetNewStationsDataRequest {
  @IsDateString()
  @IsOptional()
  lastUpdate: string;

  @IsString()
  @IsOptional()
  lastStation: string[];
}
