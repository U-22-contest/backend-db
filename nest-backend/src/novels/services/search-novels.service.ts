import { Injectable }  from "@nestjs/common";
import { SearchNovelRepository } from "../repositories/search-novels.repositories";

@Injectable()
export class SearchNovelsService {
    constructor(private readonly novelRepository: SearchNovelRepository) {}

    async searchNovel(keyword: string): Promise<{ novels: any[] }> {
        const novels = await this.novelRepository.searchByKeyword(keyword);
        return { novels };
    }
}
