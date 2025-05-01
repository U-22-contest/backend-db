import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from '../../../mongo/schema/novel.schema';

@Injectable()
export class MongoCreateNovelRepository {
    constructor(@InjectModel(Novel.name) private readonly novelModel: Model<NovelDocument>) {}

    async createNovel(sharedId: string, title: string, content: string) : Promise<NovelDocument> {
        const novel = new this.novelModel({
            sharedId,
            title,
            content,
        });
        return novel.save();
    }
}