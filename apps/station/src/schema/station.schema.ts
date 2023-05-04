import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Station extends AbstractDocument {
  @Prop()
  _id: string;

  @Prop()
  operatorInfo: string;

  @Prop()
  statusType: string;

  @Prop()
  addressInfo: string;

  @Prop()
  connections: string[];

  @Prop()
  sourceId: string;
}

export const StationSchema = SchemaFactory.createForClass(Station);
