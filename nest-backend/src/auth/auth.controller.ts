import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from "@nestjs/passport";
import { JWTPayload } from './interface/jwt-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async validateCredentials(
      @Body() body: { email: string; password: string }
  ) {
    return await this.authService.validateCredentials(body.email, body.password);
  }

  @Post('verify-token')
  async verifyToken(
      @Body() body: { token: string }
  ) {
    return await this.authService.verifyToken(body.token);
  }

}
