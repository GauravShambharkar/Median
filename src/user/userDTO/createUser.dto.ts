import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class creatUserDTO {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  
}
