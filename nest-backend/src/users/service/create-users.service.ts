import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../../generated/postgresql';
import { PostgresCreateUserRepository } from '../repositories/create-users/postgres';

export type CreateUserResponse = {
  message: string;
  user: User;
};

@Injectable()
export class CreateUsersService {
  constructor(
      private readonly postgresCreateUser: PostgresCreateUserRepository
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserResponse> {
    const user = await this.postgresCreateUser.createUser(
        createUserDto.username,
        createUserDto.email,
        createUserDto.password,
    )
    return { message: 'User created successfully', user };
  }
}
