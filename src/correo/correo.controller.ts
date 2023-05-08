import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CorreoService } from './correo.service';
import { UpdatecorreoDto } from './dto';
import { CreateCorreoDto, } from './dto/create-correo.dto';



@Controller('correo')
export class CorreoController {
    correo: any;


    constructor(
        private readonly correoService: CorreoService
    ){}

    @Get() 
    getAllcorreo(){
        return  this.correoService.findAll()
    }


    @Get(':id')
    getCorreoById( @Param('id') id: string){
        return this.correoService.findOneById( id );
    }

    @Post()
    createCorreo(@Body() CreateCorreoDto:CreateCorreoDto ){
        return this.correoService.create(CreateCorreoDto);
    }
    @Patch(':id')
    UpdateCorreoDto(@Body('id', ParseUUIDPipe ) id: string, 
      @Body() updatecorreoDto: CreateCorreoDto ) 
    {
      return this.correoService.update( id, updatecorreoDto );
    }
   

    @Delete(':id')
    delete (@Param('id', ParseUUIDPipe)  id: string){
        return this.correoService.delete(id)
    }
    
 }

