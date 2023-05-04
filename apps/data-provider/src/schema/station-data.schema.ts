import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false })
export class StationData extends AbstractDocument {
  @Prop()
  _id: Types.ObjectId;

  @Prop()
  operatorInfo: string;

  @Prop()
  statusType: string;

  @Prop()
  addressInfo: string;

  @Prop()
  connections: string[];
}

export const StationDataSchema = SchemaFactory.createForClass(StationData);
