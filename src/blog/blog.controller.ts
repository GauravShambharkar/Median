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
  async createBlog(@Body() add: blog) {
    const article = await this.blog_service.createBlogs({
      title: add.title,
      description: add.description,
      user: {
        connect: {
          userId: add.userId,
        },
      },
    });

    return { data: article };
  }
}
