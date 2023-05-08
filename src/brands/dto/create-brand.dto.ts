import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {


    @IsString()
    @MinLength(1)
    id: string;
    email: string;
}
