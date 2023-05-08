// import { PartialType } from '@nestjs/mapped-types';
 import { IsString, IsUUID, IsOptional } from 'class-validator';


// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
export class   UpdatecorreoDto {
  
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly email?:    string;

    @IsString()
    @IsOptional()
    readonly usuario?: string;

    @IsString()
    @IsOptional()
    readonly telefono?: string;

}