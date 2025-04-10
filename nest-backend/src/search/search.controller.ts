import { Controller, Get, Query } from "@nestjs/common";
import { SearchTitleDto } from "./dto/search-title";

@Controller("search")
export class SearchController {
    constructor() {}

    @Get("title")
    async searchTitle(@Query() query: SearchTitleDto) {
        const { title } = query;
        // ここで検索処理を実装する
        // 例: データベースからタイトルを検索して結果を返す
        return { message: `Searching for title: ${title}` };
    }
}
