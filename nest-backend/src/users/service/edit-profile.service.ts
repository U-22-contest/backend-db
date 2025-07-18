import { ConflictException, Injectable } from '@nestjs/common';
import { EditProfileDto, EditProfileResponse } from "../dto/edit-profile.dto";
import { PostgresEditProfileRepository } from "../repositories/edit-profile/postgres";
import { PostgresCreateUserRepository } from "../../users/repositories/create-users/postgres";

@Injectable()
export class EditProfileService {
  constructor(
    private readonly postgresEditProfile: PostgresEditProfileRepository,
    private readonly postgresCreateUser: PostgresCreateUserRepository,
  ) {}

  async editProfile(userId: string, editProfileDto: EditProfileDto): Promise<EditProfileResponse> {

    const exitProfile = await this.postgresEditProfile.getProfile(userId);

    if (editProfileDto.username) {
      const exitUsername = await this.postgresCreateUser.findUsername(editProfileDto.username);
      if (exitUsername) throw new ConflictException('このユーザー名が存在しています。');
    }

    if (editProfileDto.email) {
      const exitEmail = await this.postgresCreateUser.findEmail(editProfileDto.email);
      if (exitEmail) throw new ConflictException('このメールアドレスが存在しています。');
    }

    const updateProfile = await this.postgresEditProfile.editProfile(
      userId,
      editProfileDto,
      exitProfile,
    );
    return {
      message: 'Update profile successfully',
      user: {
        id: updateProfile.id,
        username: updateProfile.username,
        email: updateProfile.email,
        profileImagePath: updateProfile.profileImagePath,
        createdAt: updateProfile.createdAt,
        updatedAt: updateProfile.updatedAt,
      }
    }
  }
}
