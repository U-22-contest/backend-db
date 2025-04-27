import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // PrismaServiceを利用する場合
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { User } from "../../../generated/postgresql";

export type CreateUserResponse = {
  message: string;
  user: User;
};

@Injectable()
export class CreateUsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) : Promise<CreateUserResponse> {
    const user = await this.prisma.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: await bcrypt.hash(createUserDto.password, 10),
      },
    });
    return { message: 'User created successfully', user };
  }
}
