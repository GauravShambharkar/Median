import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateblogDto } from './Blog_DTO/createblog.dto';
import { UpdateblogDto } from './Blog_DTO/updateblog.dto';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blog_service: BlogService) {}

  @Get()
  getAllBlog() {
    return this.blog_service.findAll();
  }

  @Get(':id')
  getBlog(@Param() id: number) {
    return this.blog_service.findOne(id);
  }

  @Post('create')
  createBlog(@Body() body: CreateblogDto) {
    const article = this.blog_service.createBlogs(body);

    return { data: article };
  }

  @Patch(':id')
  // : patch used because we are upadting single data meaning small chunk of data from the table
  updateBlog(@Param('id') id: number, @Body() dto: UpdateblogDto) {
    return this.blog_service.update(id, dto);
  }

  @Delete(':id')
  deleteBlog(@Param('id') id: number) {
    return this.blog_service.deleteOne(id);
  }
}
