import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';

// service
import { CreateUsersService } from './service/create-users.service';
import { FollowUserService } from './service/follow-user.service';
import { UnfollowUserService } from './service/unfollow-user.service';
import { GetFollowersService } from './service/get-followers.service';
import { GetFolloweesService } from './service/get-followees.service';

// repositories
import { PostgresCreateUserRepository } from './repositories/create-users/postgres';
import { PostgresFollowUserRepository } from './repositories/follow-user/postgres';
import { PostgresUnfollowUserRepository } from './repositories/unfollow-user/postgres';
import { PostgresGetFollowersRepository } from './repositories/get-followers/postgres';
import { PostgresGetFolloweesRepository } from './repositories/get-followees/postgres';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateUsersService,
    FollowUserService,
    UnfollowUserService,
    GetFollowersService,
    GetFolloweesService,

    PostgresCreateUserRepository,
    PostgresFollowUserRepository,
    PostgresUnfollowUserRepository,
    PostgresGetFollowersRepository,
    PostgresGetFolloweesRepository,
  ],
  controllers: [UsersController],
  exports: [CreateUsersService],
})
export class UsersModule {}
