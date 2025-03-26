import { Injectable } from '@nestjs/common';
// 正常にPrismaClientをinstallしているのにもかかわらず認識しないので、
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../../generated/postgresql';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }
}
