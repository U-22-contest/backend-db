import { Novel as PrismaNovel } from '../../../generated/postgresql';
import { NovelDocument } from '../../mongo/schema/novel.schema';
import {ApiProperty} from "@nestjs/swagger";

export class CreateNovelResponse {
  @ApiProperty()
  postgresNovel: PrismaNovel;

  @ApiProperty()
  mongoNovel: NovelDocument;
}

export class Novel {
  @ApiProperty()
  sharedId: string;

  @ApiProperty({
    nullable: true,
    type: String,
  })
  authorId: string | null;

  @ApiProperty()
  title: string;
}
