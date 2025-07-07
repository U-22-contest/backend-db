import {Injectable, UnauthorizedException} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateCredentials(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        username: true,
        password: true,
      }
    });

    if (!user) throw new UnauthorizedException('User not found');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid password');

    const payload = {
      userId: user.id,
      email: user.email,
      username: user.username,
    };

    // JWTトークンを生成
    const token = this.jwtService.sign(payload);

    return {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
      token
    };
  }

  // JWTトークンを検証してユーザー情報を返す（新規追加）
  async verifyToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);

      // ユーザーがまだ存在するかチェック
      const user = await this.prisma.user.findUnique({
        where: { id: payload.userId },
        select: {
          id: true,
          email: true,
          username: true,
        }
      });

      if (!user) throw new UnauthorizedException('User not found');

      return {
        user: {
          userId: user.id,
          email: user.email,
          username: user.username,
        }
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
