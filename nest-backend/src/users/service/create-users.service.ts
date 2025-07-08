import { Injectable } from '@nestjs/common';
import { CreateUserDto, CreateUserResponse } from '../dto/create-user.dto';
import { User } from '../../../generated/postgresql';
import { PostgresCreateUserRepository } from '../repositories/create-users/postgres';

@Injectable()
export class CreateUsersService {
  constructor(
    private readonly postgresCreateUser: PostgresCreateUserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserResponse> {
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
