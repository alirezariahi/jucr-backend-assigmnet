import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import mongoose from 'mongoose';

@ObjectType()
export class OperatorInfo {
  WebsiteURL: string;
  Comments?: any[];
  PhonePrimaryContact?: string;
  PhoneSecondaryContact?: string;
  IsPrivateIndividual: boolean;
  AddressInfo?: any[];
  BookingURL?: string;
  ContactEmail?: string;
  FaultReportEmail?: string;
  IsRestrictedEdit: boolean;
  @Field()
  ID: number;
  description?: string;
}
@ObjectType()
export class StatusType {
  IsOperational: boolean;
  IsUserSelectable: boolean;
  @Field()
  ID: number;
  description?: string;
}

@ObjectType()
export class AddressInfo {
  @Field()
  ID: number;
  description: string;
  AddressLine1: string;
  AddressLine2?: any[];
  Town: string;
  StateOrProvince: string;
  Postcode: string;
  CountryID: number;
  Country: {
    ISOCode: string;
    ContinentCode: string;
    ID: number;
    description: string;
  };
  Latitude: number;
  Longitude: number;
  ContactTelephone1: string;
  ContactTelephone2?: any[];
  ContactEmail: string;
  AccessComments?: any[];
  RelatedURL: string;
  Distance: number;
  DistanceUnit: number;
}

@ObjectType()
export class Connection {
  @Field()
  ID: number;
  ConnectionTypeID: number;
  ConnectionType: {
    FormalName: string;
    IsDiscontinued: boolean;
    IsObsolete: boolean;
    ID: number;
    description: string;
  };
  StatusTypeID: number;
  StatusType: {
    IsOperational: boolean;
    IsUserSelectable: boolean;
    ID: number;
    description: string;
  };
  LevelID: number;
  Level: {
    Comments: string;
    IsFastChargeCapable: boolean;
    ID: number;
    description: string;
  };
  Amps?: any[];
  Voltage: number;
  PowerKW: number;
  CurrentTypeID: number;
  CurrentType: {
    Description: string;
    ID: number;
    description: string;
  };
  Quantity: number;
  UserComments?: any[];
}

@ObjectType()
@Schema({ versionKey: false })
export class Station extends AbstractDocument {
  @Field()
  @Prop()
  _id: string;

  @Field(() => OperatorInfo)
  @Prop({ type: OperatorInfo })
  operatorInfo: OperatorInfo;

  @Field(() => StatusType)
  @Prop({ type: StatusType })
  statusType: StatusType;

  @Field(() => AddressInfo)
  @Prop({ type: AddressInfo })
  addressInfo: AddressInfo;

  @Field(() => [Connection])
  @Prop({ type: [Connection] })
  connections: Connection[];

  @Prop()
  sourceId: string;
}

export const StationSchema = SchemaFactory.createForClass(Station);
