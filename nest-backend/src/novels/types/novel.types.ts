import { Novel as PrismaNovel } from '../../../generated/postgresql';
import { NovelDocument } from '../../mongo/schema/novel.schema';

export type CreateNovelResponse = {
  postgresNovel: PrismaNovel;
  mongoNovel: NovelDocument;
};

export type Novel = {
    id: string,
    authorId: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
};
