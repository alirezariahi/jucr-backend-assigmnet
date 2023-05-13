import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

@Schema({ timestamps: true })
export class AbstractDocument {
  @Prop({ type: SchemaTypes.String })
  _id: string;

  @Prop({ type: Date })
  createdAt: Date;
}
