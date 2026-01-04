import { Injectable } from '@nestjs/common';
import { request } from 'express';
import { create_blog_dto } from 'src/Blog_DTO/blog.dto';

@Injectable()
export class BlogService {
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
