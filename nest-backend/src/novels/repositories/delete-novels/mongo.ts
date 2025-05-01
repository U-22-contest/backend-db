import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from '../../../mongo/schema/novel.schema';

@Injectable()
export class MongoDeleteNovelRepository {
    constructor(
        @InjectModel(Novel.name) private readonly novelModel: Model<NovelDocument>,
    ) {}

    async deleteNovelBySharedId(sharedId: string): Promise<void> {
        await this.novelModel.deleteOne({ sharedId });
    }
}