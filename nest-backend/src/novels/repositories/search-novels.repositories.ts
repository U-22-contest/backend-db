import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { Novel, NovelDocument } from "../../mongo/schema/novel.schema";

@Injectable()
export class SearchNovelRepository {
  constructor(@InjectModel(Novel.name) private novelModel: Model<NovelDocument>) {}

  async searchByKeyword(keyword: string): Promise<Novel[]> {
    return this.novelModel.find({
      title: { $regex: keyword, $options: 'i' }, // タイトルに部分一致検索
    }).exec();
  }
}
