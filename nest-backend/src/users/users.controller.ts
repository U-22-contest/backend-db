import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  UseGuards,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JWTPayload } from '../auth/interface/jwt-payload.interface';
import { Follow } from '../../generated/postgresql';
import { CreateUsersService } from './service/create-users.service';
import { DeleteUsersService } from './service/delete-users.service';
import { FollowUserService } from './service/follow-user.service';
import { UnfollowUserService } from './service/unfollow-user.service';
import { GetFollowersService } from './service/get-followers.service';
import { GetFolloweesService } from './service/get-followees.service';
import { EditProfileService } from './service/edit-profile.service';

import {
  CreateUserDto,
  CreateUserResponse,
} from './dto/create-user.dto';
import {
  FollowUserDto,
  FollowUserResponse
} from './dto/follow-user.dto';
import { UnfollowUserDto } from './dto/unfollow-user.dto';
import { GetFolloweesResponse } from './dto/get-followees.dto';
import { GetFollowersResponse } from './dto/get-followers.dto';
import {　
  EditProfileDto,
  EditProfileResponse,
} from "./dto/edit-profile.dto";

import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersService: CreateUsersService,
    private readonly deleteUsersService: DeleteUsersService,
    private readonly followUserService: FollowUserService,
    private readonly unfollowUserService: UnfollowUserService,
    private readonly getFollowersService: GetFollowersService,
    private readonly getFolloweesService: GetFolloweesService,
    private readonly editProfileService: EditProfileService,
  ) {}

  @Post('signup')
  @ApiOperation({ summary: "ユーザー登録" })
  @ApiResponse({ status: 201, type: CreateUserResponse})
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserResponse> {
    return this.createUsersService.createUser(createUserDto);
  }

  @Delete('account')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: "アカウント削除" })
  @ApiResponse({ status: 200, description: "succes delete user" })
  async deleteAccount(
    @Request() req: { user: JWTPayload },
  ): Promise<{ message: string }> {
    return this.deleteUsersService.deleteUser(req.user.userId);
  }

  @Put('profile')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('file'))
  @ApiBearerAuth()
  @ApiOperation({ summary: "プロフィール更新" })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({ status: 200, type: EditProfileResponse })
  async editProfile(
    @Body() editProfileDto: EditProfileDto,
    @UploadedFile() file: Express.Multer.File,
    @Request() req: { user: JWTPayload },
  ): Promise<EditProfileResponse> {
    editProfileDto.profileImagePath = file ? `/uploads/profiles/${file.filename}` : null;
    return this.editProfileService.editProfile(
      req.user.userId,
      editProfileDto,
    );
  }

  @Post('follow/:userid')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: "ユーザーフォロー" })
  @ApiParam({ name: 'userid', description: 'フォロー対象のユーザーID' })
  @ApiResponse({ status: 201, type: FollowUserResponse })
  async followUser(
    @Param('userid') followeeId: string,
    @Request() req: { user: JWTPayload },
  ): Promise<FollowUserResponse> {
    const followUserDto: FollowUserDto = {
      followerId: req.user.userId,
      followeeId: followeeId,
    };
    return this.followUserService.followUser(followUserDto);
  }

  @Delete('unfollow/:userid')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: "ユーザーアンフォロー" })
  @ApiParam({ name: 'userid', description: 'アンフォロー対象のユーザーID' })
  @ApiResponse({ status: 200, description: "フォロー解除成功" })
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
  @ApiOperation({ summary: "フォロワー一覧取得" })
  @ApiParam({ name: 'userid', description: 'フォロワーを取得するユーザーID' })
  @ApiResponse({ status: 200, type: [GetFollowersResponse] })
  async getFollowers(
    @Param('userid') userid: string,
  ): Promise<GetFollowersResponse[]> {
    return this.getFollowersService.getFollowers(userid);
  }

  @Get('followees/:userid')
  @ApiOperation({ summary: "フォロー中ユーザー一覧取得" })
  @ApiParam({ name: 'userid', description: 'フォロー中ユーザーを取得するユーザーID' })
  @ApiResponse({ status: 200, type: [GetFolloweesResponse] })
  async getFollowees(
    @Param('userid') userid: string,
  ): Promise<GetFolloweesResponse[]> {
    return this.getFolloweesService.getFollowees(userid);
  }
}
