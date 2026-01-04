import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { create_blog_dto } from 'src/Blog_DTO/blog.dto';
import { BlogService } from './blog.service';

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
  craeteBlog(@Body() blogdto: create_blog_dto) {
    return this.blog_service.createBlogs({
      title: blogdto.title,
      description: blogdto.description,
    });
  }
}
