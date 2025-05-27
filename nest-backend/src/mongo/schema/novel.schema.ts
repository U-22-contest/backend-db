import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NovelDocument = Novel & Document;

@Schema()
export class Novel {
  @Prop({ required: true, unique: true })
  sharedId: string; // PostgresのauthorIdをそのまま保存

  @Prop({ required: true })
  content: string;
}

export const NovelSchema = SchemaFactory.createForClass(Novel);
