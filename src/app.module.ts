import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [PrismaModule, BlogModule],
  controllers: [AppController, BlogController, HealthController],
  providers: [AppService, BlogService],
})
export class AppModule {}
