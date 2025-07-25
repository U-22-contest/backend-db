import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { NovelsModule } from './novels/novels.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { LikeModule } from './like/like.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) throw new Error('MONGO_URL environment variable is not defined');

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ envFilePath: '../.env' }),
    MongooseModule.forRoot(mongoUrl),
    AuthModule,
    UsersModule,
    NovelsModule,
    CommentsModule,
    CategoriesModule,
    LikeModule,
    BookmarkModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads', 'covers'),
      serveRoot: '/static/covers',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
