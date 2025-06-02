import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NovelDocument } from 'src/mongo/schema/novel.schema';
import { Model } from 'mongoose';

@Injectable()
export class MongoSearchNovelRepository {
  constructor(@InjectModel('Novel') private novelModel: Model<NovelDocument>) {}

  async getPreviewBySharedId(sharedId: string): Promise<string> {
    const novel = await this.novelModel.findOne({ sharedId }).lean();
    return novel?.content?.slice(0, 100) ?? '';
  }
}
