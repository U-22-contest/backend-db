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
    editDto,
  ): Promise<void> {
    const updateData: any = {}

    if (editDto.content) {
      updateData.content = editDto.content;
    }

    if (editDto.overview) {
      updateData.overview = editDto.overview;
    }

    await this.novelModel.findOneAndUpdate(
        { sharedId },
        { $set: updateData }
    )
  }
}
