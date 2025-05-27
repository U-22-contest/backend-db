import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Novel, NovelDocument } from '../../../mongo/schema/novel.schema';

@Injectable()
export class MongoGetPreviewByIdRepository {
    constructor(@InjectModel(Novel.name) private readonly novelModel: Model<NovelDocument>) {}

    async findBySharedId(sharedId: string) : Promise<NovelDocument | null> {
        // return this.novelModel.findOne({ sharedId }).lean();
        const result = await this.novelModel
            .aggregate([
                {
                    $match: { sharedId }
                },
                {
                    $project: {
                        sharedId: 1,
                        content: { $substr: ['$content', 0, 50] }, // 最初50文字を取得
                        _id: 0
                    }
                }
            ])
            .exec();

        return result.length > 0 ? result[0] : null;
    }
}