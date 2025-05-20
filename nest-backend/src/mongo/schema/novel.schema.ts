import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NovelDocument = Novel & Document;

@Schema()
export class Novel {
  @Prop({ required: true, unique: true })
  sharedId: string;

  // @Prop({ required: true })
  // title: string;

  @Prop({ required: true })
  content: string; // PostgresのauthorIdをそのまま保存
}

export const NovelSchema = SchemaFactory.createForClass(Novel);
