// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private pool: Pool;

  constructor() {
    // 1. Setup the connection pool
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    // 2. Wrap it in the Prisma Adapter
    const adapter = new PrismaPg(pool);

    // 3. Initialize the Client with the adapter

    super({ adapter });
    this.pool = pool;
  }

  //: most important
  async onModuleInit() {
    await this.$connect()
      .then(() => {
        console.log('<< Connected to the databse successfully >>');
      })
      .catch(() => {
        console.log('<< failed to connect to the database >>');
      });
  }

  async onModuleDestroy() {
    await this.$disconnect().then(() => {
      console.log('<< Disconnected >>');
    });
    await this.pool.end();
  }
}
