import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { User } from '../../../../generated/postgresql';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from "../../dto/create-user.dto";

@Injectable()
export class PostgresCreateUserRepository {
  constructor(private prisma: PrismaService) {}

  async findUsername(username: string): Promise<User | null>{
    return this.prisma.user.findUnique({
      where: {
        username
      }
    })
  }

  async findEmail(email: string): Promise<User | null>{
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  async createUser(
    username: string,
    email: string,
    rawPassword: string,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    return this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
  }
}
