import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { creatUserDTO } from './userDTO/createUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async creaUser(dto: creatUserDTO) {
    try {
      return await this.prismaService.user.create({
        data: dto,
      });
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
