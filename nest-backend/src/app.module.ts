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

// const mongoUrl = process.env.MONGO_URL;
// if (!mongoUrl) throw new Error('MONGO_URL environment variable is not defined');

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ envFilePath: '../.env' }),
    // MongooseModule.forRoot(mongoUrl),
    MongooseModule.forRoot(
      process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase',
    ),
    AuthModule,
    UsersModule,
    NovelsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
