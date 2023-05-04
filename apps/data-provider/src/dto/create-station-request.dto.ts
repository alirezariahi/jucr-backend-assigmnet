import { IsString, IsNotEmpty, IsArray } from 'class-validator';
export class CreateStationDataRequest {
  @IsString()
  @IsNotEmpty()
  operatorInfo: string;

  @IsString()
  @IsNotEmpty()
  statusType: string;

  @IsString()
  @IsNotEmpty()
  addressInfo: string;

  @IsArray()
  connections: string[];
}
