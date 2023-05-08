import { CorreoService } from './correo.service';
import { CreateCorreoDto } from './dto/create-correo.dto';
export declare class CorreoController {
    private readonly correoService;
    correo: any;
    constructor(correoService: CorreoService);
    getAllcorreo(): import("./interfaces/correo.interface").Correo[];
    getCorreoById(id: string): import("./interfaces/correo.interface").Correo;
    createCorreo(CreateCorreoDto: CreateCorreoDto): import("./interfaces/correo.interface").Correo;
    UpdateCorreoDto(id: string, updatecorreoDto: CreateCorreoDto): import("./interfaces/correo.interface").Correo;
    delete(id: string): void;
}
