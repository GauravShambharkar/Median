import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { creatUserDTO } from './userDTO/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: creatUserDTO) {
    return this.userService.creaUser(body);
  }
}
