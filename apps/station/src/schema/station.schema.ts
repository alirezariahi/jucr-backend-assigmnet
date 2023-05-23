import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
@Schema({ versionKey: false })
export class Station extends AbstractDocument {
  @Field()
  @Prop()
  _id: string;

  @Field()
  @Prop()
  operatorInfo: string;

  @Field()
  @Prop()
  statusType: string;

  @Field()
  @Prop()
  addressInfo: string;

  @Field()
  @Prop()
  connections: string[];

  @Prop()
  sourceId: string;
}

export const StationSchema = SchemaFactory.createForClass(Station);
