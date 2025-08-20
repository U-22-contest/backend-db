import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class EditProfileDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    username?: string;

    @ApiProperty()
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @MinLength(6)
    password?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    profileImagePath?: string | null;
}

class UserInfo {
    @ApiProperty()
    id: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    profileImagePath: string | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

export class EditProfileResponse {
    @ApiProperty()
    message: string;

    @ApiProperty()
    user: UserInfo;
}