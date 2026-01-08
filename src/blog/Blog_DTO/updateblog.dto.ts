import { IsString } from 'class-validator';

export class UpdateblogDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsString()
  body?: string;
}
