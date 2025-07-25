import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostgresDeleteUserRepository {
    constructor(private prisma: PrismaService) {}

    async deleteUser(userId: string) : Promise<void> {
        await this.prisma.user.delete({
            where: { id: userId }
        });
    }
}