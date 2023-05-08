import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateCorreoDto,  } from './dto/create-correo.dto';
import { UpdatecorreoDto } from './dto/update.correo';
import { Correo } from './interfaces/correo.interface';

@Injectable()
export class CorreoService {


    private Correo : Correo[]= [
        // {
        //     id: uuid(),
        //     email: "data@email.com",
        //     usuario: "usuario 1",
        //     telefono: "525551865113"
        // },
      
    ];
    UpdateCorreoDto: Correo;
    correo: Correo[];
    
   

    findAll() {
        return this.Correo;
    }

    findOneById( id: string ) {
        
        const correo = this.Correo.find( Correo => Correo.id === id );
        if ( !correo ) throw new NotFoundException(`correo with id '${ id }' not found`);
        
        return correo;
    }

    create(CreateCorreoDto: CreateCorreoDto){

        const Correo:Correo ={
            id: uuid(),
          ...CreateCorreoDto,
        }

        this.Correo.push(Correo);


        return Correo;

    }
    update(id: string, updateCorreoDto: CreateCorreoDto){

        let correoDB = this.findOneById(id);

        if(updateCorreoDto.id && updateCorreoDto.id !== id)
        throw new BadRequestException(`Correo id is not valid inside body`)

        this.Correo = this.Correo.map(correo =>{

            if ( correo.id === id){
                correoDB ={...correoDB, ...this.UpdateCorreoDto, id, }
                return correoDB;
            }
            return correo;
        });
        return correoDB; // correo actulizado
    }

    delete (id:string){
        const correo = this.findOneById(id);
        this.Correo = this.Correo.filter(correo=> correo.id == id);
        return ; 
    }

    fillCorreoWhithSeedData(correo: Correo[] ){
        this.correo = correo;
    }
}

