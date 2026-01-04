import { Injectable } from '@nestjs/common';
import { request } from 'express';
import { PrismaClient } from 'generated/prisma/client';


@Injectable()
export class BlogService {
  blogModel = new PrismaClient();

  getBlogs() {
    return {
      msg: `all blogs will be fetched from ${request.originalUrl}`,
    };
  }
  getSingleBlog(id) {
    return {
      msg: `single blog will be return here`,
    };
  }

  //   createBlogs injectable Service
  createBlogs({ title, description }) {
    return {
      msg: 'blog has been create',
      title: title,
      description: description,
    };
  }
}
