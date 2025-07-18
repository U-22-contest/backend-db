import { Injectable, NotFoundException } from '@nestjs/common';
import { PostgresDeleteUserRepository } from '../repositories/delete-users/postgres';

@Injectable()
export class DeleteUsersService {
    constructor(
        private readonly postgresDeleteUser: PostgresDeleteUserRepository,
    ) {}

    async deleteUser(userId: string): Promise<{ message: string }> {

        await this.postgresDeleteUser.deleteUser(userId);
        return { message: "succes delete user" }
    }
}
