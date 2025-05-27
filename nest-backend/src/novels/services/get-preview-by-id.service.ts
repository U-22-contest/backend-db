import { Injectable } from '@nestjs/common';
import { Error } from 'mongoose';
import { PostgresGetPreviewByIdRepository } from '../repositories/get-preview-by-id/postgres'
import { MongoGetPreviewByIdRepository } from '../repositories/get-preview-by-id/mongo'

export type GetPreviewByIdResponse = {
    id: string;
    sharedId: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
};

@Injectable()
export class GetPreviewByIdService {
    constructor(
        private readonly postgresGetPreviewById: PostgresGetPreviewByIdRepository,
        private readonly mongoGetPreviewById: MongoGetPreviewByIdRepository,
    ) {}

    //id指定で取得
    async getPreviewById(id: string): Promise<GetPreviewByIdResponse> {
        const psqlNovel = await this.postgresGetPreviewById.findNovelById(id);
        if (!psqlNovel) throw new Error('該当する小説がありません');

        //小説内容の取得
        const mongoNovel = await this.mongoGetPreviewById.findBySharedId(psqlNovel.sharedId);
        if (!mongoNovel) throw new Error('該当する小説内容がありません');

        return {
            ...psqlNovel,
            content: mongoNovel.content ?? '',
        };
    }
}
