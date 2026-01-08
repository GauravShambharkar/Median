import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogService } from './blog/blog.service';
import { BlogController } from './blog/blog.controller';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';
import { HealthController } from './health/health.controller';
import { CoModule } from './s/co/co.module';
import { UserModule } from './user/user.module';
import { CoModule } from './s/co/co.module';

@Module({
  imports: [PrismaModule, BlogModule, CoModule, UserModule],
  controllers: [AppController, BlogController, HealthController],
  providers: [AppService, BlogService],
})
export class AppModule {}
