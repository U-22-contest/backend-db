import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from '../../../mongo/schema/novel.schema';

@Injectable()
export class MongoGetPreviewByIdRepository {
  constructor(
    @InjectModel(Novel.name) private readonly novelModel: Model<NovelDocument>,
  ) {}

  async findBySharedId(sharedId: string): Promise<NovelDocument | null> {
    const result = await this.novelModel
      .aggregate([
        {
          $match: { sharedId },
        },
        {
          $project: {
            sharedId: 1,
            // TODO: preview取得機能しないので、後に確認
            // → 最初30文字取得できることを確認済み
            content: { $substrCP: ['$content', 0, 30] },
            overview: 1,
            _id: 0,
          },
        },
      ])
      .exec();

    return result.length > 0 ? result[0] : null;
  }
}
