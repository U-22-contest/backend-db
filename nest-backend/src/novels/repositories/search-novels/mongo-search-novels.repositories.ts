import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NovelDocument } from 'src/mongo/schema/novel.schema';
import { Model } from 'mongoose';

@Injectable()
export class MongoSearchNovelRepository {
  constructor(@InjectModel('Novel') private novelModel: Model<NovelDocument>) {}

  async searchByTitle(
    keyword: string,
  ): Promise<{ sharedId: string; title: string }[]> {
    const result = await this.novelModel
      .find(
        { title: { $regex: keyword, $options: 'i' } },
        { sharedId: 1, title: 1 },
      )
      .lean();

    return result.map((r) => ({
      sharedId: r.sharedId,
      title: r.title,
    }));
  }
}
