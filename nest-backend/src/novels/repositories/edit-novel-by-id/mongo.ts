import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from '../../../mongo/schema/novel.schema';

@Injectable()
export class MongoEditNovelRepository {
  constructor(
    @InjectModel(Novel.name) private readonly novelModel: Model<NovelDocument>,
  ) {}

  // TODO: 一旦voidで返す
  async updateContentBySharedId(
    sharedId: string,
    content: string,
  ): Promise<void> {
    await this.novelModel.updateOne({ sharedId }, { $set: { content } });
  }
}
