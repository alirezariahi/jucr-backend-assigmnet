import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class AbstractDocument {
  @Field()
  @Prop({ type: SchemaTypes.String })
  _id: string;

  @Field()
  @Prop({ type: Date })
  createdAt: Date;

  @Field()
  @Prop({ type: Date })
  updatedAt: Date;
}
