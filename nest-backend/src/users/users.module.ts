import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';

// service
import { CreateUsersService } from './service/create-users.service';
import { DeleteUsersService } from './service/delete-users.service';
import { FollowUserService } from './service/follow-user.service';
import { UnfollowUserService } from './service/unfollow-user.service';
import { GetFollowersService } from './service/get-followers.service';
import { GetFolloweesService } from './service/get-followees.service';
import { EditProfileService } from './service/edit-profile.service';

// repositories
import { PostgresCreateUserRepository } from './repositories/create-users/postgres';
import { PostgresDeleteUserRepository } from './repositories/delete-users/postgres';
import { PostgresFollowUserRepository } from './repositories/follow-user/postgres';
import { PostgresUnfollowUserRepository } from './repositories/unfollow-user/postgres';
import { PostgresGetFollowersRepository } from './repositories/get-followers/postgres';
import { PostgresGetFolloweesRepository } from './repositories/get-followees/postgres';
import { PostgresEditProfileRepository } from './repositories/edit-profile/postgres';
import {MulterModule} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import　* as path from "path";
import {v4 as uuid4} from "uuid";

@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/profiles', // プロジェクトのルートディレクトリからの相対パス
        filename: (req, file, callback) => {
          const ext = path.extname(file.originalname);
          const filename = `$${uuid4()}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  ],
  providers: [
    CreateUsersService,
    DeleteUsersService,
    FollowUserService,
    UnfollowUserService,
    GetFollowersService,
    GetFolloweesService,
    EditProfileService,

    PostgresCreateUserRepository,
    PostgresDeleteUserRepository,
    PostgresFollowUserRepository,
    PostgresUnfollowUserRepository,
    PostgresGetFollowersRepository,
    PostgresGetFolloweesRepository,
    PostgresEditProfileRepository,
  ],
  controllers: [UsersController],
  exports: [CreateUsersService],
})
export class UsersModule {}
