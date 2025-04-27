import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
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
