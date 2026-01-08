/*
  Warnings:

  - The primary key for the `Article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `body` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Article` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Article` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Article" DROP CONSTRAINT "Article_pkey",
DROP COLUMN "body",
DROP COLUMN "id",
ADD COLUMN     "BlogId" SERIAL NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "published" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ADD CONSTRAINT "Article_pkey" PRIMARY KEY ("BlogId");

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
