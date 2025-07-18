import {　ConflictException, Injectable　} from '@nestjs/common';
import { CreateUserDto, CreateUserResponse } from '../dto/create-user.dto';
import { PostgresCreateUserRepository } from '../repositories/create-users/postgres';

@Injectable()
export class CreateUsersService {
  constructor(
    private readonly postgresCreateUser: PostgresCreateUserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserResponse> {

    const exitUsername = await this.postgresCreateUser.findUsername(createUserDto.username)
    if (exitUsername) throw new ConflictException('このユーザー名が存在しています。');

    const exitEmail = await this.postgresCreateUser.findEmail(createUserDto.email)
    if (exitEmail) throw new ConflictException('このメールアドレスが存在しています。');

    const user = await this.postgresCreateUser.createUser(
      createUserDto.username,
      createUserDto.email,
      createUserDto.password,
    );
    return {
      message: 'User created successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      }
    };
  }
}
