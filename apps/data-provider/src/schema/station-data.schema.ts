import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class StationData extends AbstractDocument {
  @Prop()
  operatorInfo: string;

  @Prop()
  statusType: string;

  @Prop()
  addressInfo: string;

  @Prop()
  connections: string[];
}

const StationDataSchema = SchemaFactory.createForClass(StationData);

StationDataSchema.pre('save', function () {
  this.createdAt = new Date(Date.now());
});

export { StationDataSchema };
