import { Novel as PrismaNovel } from '../../../generated/postgresql';
import { NovelDocument } from '../../mongo/schema/novel.schema';

export class CreateNovelResponse {
  postgresNovel: PrismaNovel;
  mongoNovel: NovelDocument;
}

export class Novel {
  sharedId: string;
  authorId: string | null;
  title: string;
}
