import { Injectable } from '@nestjs/common';
import { Error } from 'mongoose';
import { MongoGetPreviewByIdRepository } from '../repositories/get-preview-by-id/mongo'

export type GetPreviewByIdResponse = {
    sharedId: string;
    content: string;
    overview: string;
};

@Injectable()
export class GetPreviewByIdService {
    constructor(
        private readonly mongoGetPreviewById: MongoGetPreviewByIdRepository,
    ) {}

    //id指定で取得
    async getPreviewById(sharedId: string): Promise<GetPreviewByIdResponse> {
        //小説内容の取得
        const mongoNovel = await this.mongoGetPreviewById.findBySharedId(sharedId);
        if (!mongoNovel) throw new Error('該当する小説内容がありません');

        return {
            sharedId,
            content: mongoNovel.content ?? '',
            overview: mongoNovel.overview ?? '',
        };
    }
}
