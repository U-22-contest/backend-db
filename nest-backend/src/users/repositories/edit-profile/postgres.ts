import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { User } from '../../../../generated/postgresql';
import * as bcrypt from 'bcryptjs';
import { EditProfileDto } from "../../dto/edit-profile.dto"

@Injectable()
export class PostgresEditProfileRepository {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      }
    });
  }

  async editProfile(
    userId: string,
    editProfileDto: EditProfileDto,
    exitProfile,
  ): Promise<User> {
    let hashedPassword = exitProfile.password
    if (editProfileDto.password) {
      const hashedPassword = await bcrypt.hash(editProfileDto.password, 10);
    }

    const updateProfileData: EditProfileDto = {
      username: editProfileDto.username || exitProfile.username,
      email: editProfileDto.email || exitProfile.email,
      password: hashedPassword,
    };

    // profileImagePathがnullの時、既存の画像パスを削除
    if (editProfileDto.profileImagePath !== undefined) {
      updateProfileData.profileImagePath = editProfileDto.profileImagePath;
    } else {
      updateProfileData.profileImagePath = exitProfile.profileImagePath;
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: updateProfileData,
    });
  }
}
