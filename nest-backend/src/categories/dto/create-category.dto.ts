import {ApiProperty} from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty()
  categoryName: string;
}
