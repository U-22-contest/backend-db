import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from '../../../mongo/schema/novel.schema';

@Injectable()
export class MongoGetNovelByIdRepository {
    constructor(@InjectModel(Novel.name) private readonly novelModel: Model<NovelDocument>) {}

    async findBySharedId(sharedId: string) : Promise<NovelDocument | null> {
        return this.novelModel.findOne({ sharedId }).lean();
    }
}