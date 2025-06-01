import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  UseGuards,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';
import { Follow } from '../../generated/postgresql';
import {
  CreateUsersService,
  CreateUserResponse,
} from './service/create-users.service';
import { FollowUserService } from './service/follow-user.service';
import { UnfollowUserService } from './service/unfollow-user.service';
import {
  GetFollowersService,
  GetFollowersResponse,
} from './service/get-followers.service';
import {
  GetFolloweesService,
  GetFolloweesResponse,
} from './service/get-followees.service';

import { CreateUserDto } from './dto/create-user.dto';
import { FollowUserDto } from './dto/follow-user.dto';
import { UnfollowUserDto } from './dto/unfollow-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUsersService,
    private readonly followUserService: FollowUserService,
    private readonly unfollowUserService: UnfollowUserService,
    private readonly getFollowersService: GetFollowersService,
    private readonly getFolloweesService: GetFolloweesService,
  ) {}

  @Post('signup')
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserResponse> {
    return this.createUsersService.createUser(createUserDto);
  }

  @Post('follow/:userid')
  @UseGuards(AuthGuard('jwt'))
  async followUser(
    @Param('userid') followeeId: string,
    @Request() req: { user: JWTPayload },
  ): Promise<Follow> {
    const followUserDto: FollowUserDto = {
      followerId: req.user.userId,
      followeeId: followeeId,
    };
    return this.followUserService.followUser(followUserDto);
  }

  @Delete('unfollow/:userid')
  @UseGuards(AuthGuard('jwt'))
  async unfollowUser(
    @Param('userid') followeeId: string,
    @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    const unfollowUserDto: UnfollowUserDto = {
      followerId: req.user.userId,
      followeeId: followeeId,
    };
    return this.unfollowUserService.unfollowUser(unfollowUserDto);
  }

  @Get('followers/:userid')
  async getFollowers(
    @Param('userid') userid: string,
  ): Promise<GetFollowersResponse[]> {
    return this.getFollowersService.getFollowers(userid);
  }

  @Get('followees/:userId')
  async getFollowees(
    @Param('userid') userid: string,
  ): Promise<GetFolloweesResponse[]> {
    return this.getFolloweesService.getFollowees(userid);
  }
}
