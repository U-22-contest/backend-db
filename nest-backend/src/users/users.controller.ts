import { Controller, Post, Body } from '@nestjs/common';
import {
  CreateUsersService,
  CreateUserResponse,
} from './service/create-users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly createUsersService: CreateUsersService) {}

  @Post('signup')
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserResponse> {
    return this.createUsersService.createUser(createUserDto);
  }
}
