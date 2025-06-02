import { Novel as PrismaNovel } from '../../../generated/postgresql';
import { NovelDocument } from '../../mongo/schema/novel.schema';

export type CreateNovelResponse = {
  postgresNovel: PrismaNovel;
  mongoNovel: NovelDocument;
};

export type Novel = {
  sharedId: string;
  authorId: string;
  title: string;
};
