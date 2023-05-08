import { CreateCorreoDto } from './dto/create-correo.dto';
import { Correo } from './interfaces/correo.interface';
export declare class CorreoService {
    private Correo;
    UpdateCorreoDto: Correo;
    correo: Correo[];
    findAll(): Correo[];
    findOneById(id: string): Correo;
    create(CreateCorreoDto: CreateCorreoDto): Correo;
    update(id: string, updateCorreoDto: CreateCorreoDto): Correo;
    delete(id: string): void;
    fillCorreoWhithSeedData(correo: Correo[]): void;
}
