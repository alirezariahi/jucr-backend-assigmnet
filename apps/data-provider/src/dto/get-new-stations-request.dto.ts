import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';
export class GetNewStationsDataRequest {
  @IsNumber()
  @IsNotEmpty()
  skip: number;

  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @IsDateString()
  lastUpdate: string;

  @IsString()
  lastStation: string[];
}
