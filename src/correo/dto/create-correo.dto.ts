import { IsString } from "class-validator";


export class CreateCorreoDto {

    @IsString()
    readonly email: string;

    @IsString()
    readonly usuario: string;


    @IsString()
    readonly telefono: string;
    id: string;


}