// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import * as bcrypt from 'bcryptjs';
// import { JwtService } from '@nestjs/jwt';
//
// @Injectable()
// export class AuthService {
//   constructor(
//     private prisma: PrismaService,
//     private jwtService: JwtService,
//   ) {}
//
//   async signUp(email: string, password: string, username: string) {
//     const hashedPassword = await bcrypt.hash(password, 10);
//
//     const user = await this.prisma.user.create({
//       data: {
//         username,
//         email,
//         password: hashedPassword,
//       },
//     });
//     return { message: 'User created successfully', user };
//   }
//
//   async signIn(email: string, password: string) {
//     const user = await this.prisma.user.findUnique({ where: { email } });
//
//     if (!user) {
//       throw new Error('User not found');
//     }
//
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       throw new Error('Invalid credentials');
//     }
//     const token = this.jwtService.sign({ userId: user.id });
//
//     return { message: 'Login successful', token };
//   }
// }

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async signIn(email: string, password: string) {
    // ユーザーの有無
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');

    // パスワードの正誤
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid credentials');

    const token = this.jwtService.sign({ userId: user.id });

    return { message: 'Login successful', token };
  }
}
