-- CreateTable
CREATE TABLE "ViewHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "novelId" TEXT NOT NULL,

    CONSTRAINT "ViewHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ViewHistory_userId_novelId_key" ON "ViewHistory"("userId", "novelId");

-- AddForeignKey
ALTER TABLE "ViewHistory" ADD CONSTRAINT "ViewHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewHistory" ADD CONSTRAINT "ViewHistory_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "Novel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
