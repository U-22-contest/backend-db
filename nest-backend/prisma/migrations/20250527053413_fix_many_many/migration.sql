/*
  Warnings:

  - You are about to drop the `_CategoryToNovel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToNovel" DROP CONSTRAINT "_CategoryToNovel_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToNovel" DROP CONSTRAINT "_CategoryToNovel_B_fkey";

-- DropTable
DROP TABLE "_CategoryToNovel";

-- CreateTable
CREATE TABLE "_NovelCategories" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_NovelCategories_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_NovelCategories_B_index" ON "_NovelCategories"("B");

-- AddForeignKey
ALTER TABLE "_NovelCategories" ADD CONSTRAINT "_NovelCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NovelCategories" ADD CONSTRAINT "_NovelCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Novel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
