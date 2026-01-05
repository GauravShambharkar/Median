import { ConflictException, Injectable } from '@nestjs/common';
import { promises } from 'dns';
import { request } from 'express';
import { Prisma, PrismaClient } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { blog } from 'src/Schemas/blog.schema';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  // getting all blogs
  
  getBlogs() {
    return {
      msg: `all blogs will be fetched from ${request.originalUrl}`,
    };
  }

  // getting an single blog
  getSingleBlog(id) {
    return {
      msg: `single blog will be return here`,
    };
  }

  //   createBlogs injectable Service
  async createBlogs(create_blog: Prisma.ArticleCreateInput) {
    try {
      const isdataExist = await this.prisma.article.findFirst({
        where: { title: create_blog.title },
      });
      if (isdataExist) {
        throw new ConflictException();
      }
      const data = await this.prisma.article.create({ data: create_blog });
      return data;
    } catch (error) {}
  }
}
