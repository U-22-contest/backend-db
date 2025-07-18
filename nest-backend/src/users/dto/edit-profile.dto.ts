import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class EditProfileDto {
    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    password?: string;

    @IsOptional()
    @IsString()
    profileImagePath?: string | null;
}

export interface EditProfileResponse {
    message: string;
    user: {
        id: string;
        username: string;
        email: string;
        profileImagePath: string | null;
        createdAt: Date;
        updatedAt: Date;
    };
}