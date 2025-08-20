import {
  Controller,
  Post,
  Body,
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
import { AuthService } from './auth.service';
import { AuthGuard } from "@nestjs/passport";
import { JWTPayload } from './interface/jwt-payload.interface';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  @ApiOperation({ summary: 'ユーザーログイン' })
  @ApiBody({
    description: 'ログイン情報',
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          description: 'メールアドレス',
        },
        password: {
          type: 'string',
          description: 'パスワード',
        }
      },
      required: ['email', 'password']
    }
  })
  @ApiResponse({
    status: 200,
    description: 'ログイン成功',
    schema: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
          description: 'JWTアクセストークン',
          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        },
        user: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
            profileImagePath: {
              type: 'string',
              description: 'プロフィール画像のパス',
              example: '/uploads/profiles/user_123.jpg',
              nullable: true
            }
          }
        }
      }
    }
  })
  async validateCredentials(
      @Body() body: { email: string; password: string }
  ) {
    return await this.authService.validateCredentials(body.email, body.password);
  }

  @Post('verify-token')
  @ApiOperation({ summary: 'トークン検証' })
  @ApiBody({
    description: 'JWTトークン',
    schema: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
          description: 'JWTアクセストークン',
          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        }
      },
      required: ['token']
    }
  })
  @ApiResponse({
    status: 200,
    description: 'トークン有効',
    schema: {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            userId: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' }
          }
        }
      }
    }
  })
  async verifyToken(
      @Body() body: { token: string }
  ) {
    return await this.authService.verifyToken(body.token);
  }

}
