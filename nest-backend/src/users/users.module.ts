import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateUsersService } from './service/create-users.service';

@Module({
  imports: [PrismaModule],
  providers: [CreateUsersService],
  controllers: [UsersController],
  exports: [CreateUsersService],
})
export class UsersModule {}
