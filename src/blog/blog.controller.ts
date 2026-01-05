import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { blog } from 'src/Schemas/blog.schema';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blog_service: BlogService) {}

  @Get()
  getAllBlog() {
    return this.blog_service.getBlogs();
  }

  @Get(':id')
  getBlog(@Param() id: string) {
    return this.blog_service.getSingleBlog(id);
  }

  @Post('create')
  craeteBlog(@Body() add: blog) {
    const artical = this.blog_service.createBlogs({
      title: add.title,
      description: add.description,
    });

    return {
      data: artical,
    };
  }
}
