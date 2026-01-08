import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateblogDto {
  //: validations witht the inbuilt bad response responses if theres an bad request
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}
