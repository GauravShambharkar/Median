import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { promises } from 'dns';
import { request } from 'express';
import { Prisma, PrismaClient } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { blog } from 'src/Schemas/blog.schema';
import { CreateblogDto } from './Blog_DTO/createblog.dto';
import { UpdateblogDto } from './Blog_DTO/updateblog.dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  // getting all blogs

  async findAll() {
    return await this.prisma.article.findMany({
      orderBy: { title: 'asc' },
    });
  }

  // getting an single blog
  async findOne(id: number) {
    const article = await this.prisma.article.findUnique({
      where: { BlogId: id },
    });

    if (!article) throw new NotFoundException();
    return article;
  }

  //   createBlogs injectable Service
  async createBlogs(dto: CreateblogDto) {
    const isDataExist = await this.prisma.article.findUnique({
      where: { title: dto.title },
    });

    if (isDataExist) {
      throw new ConflictException('Article already exists');
    }

    return this.prisma.article.create({
      data: {
        title: dto.title,
        user: {
          connect: { userId: dto.userId },
        },
      },
    });
  }

  async update(id: number, dto: UpdateblogDto) {
    await this.findOne(id);

    //: we can use the upsert query here which
    //: cheks if the data exist or not if exist it will update the data -- if not it will create new data

    return this.prisma.article.update({
      where: { BlogId: id },
      data: dto,
    });
  }

  async deleteOne(id: number) {
    await this.findOne(id);

    return this.prisma.article.delete({
      where: { BlogId: id },
    });
  }
}
