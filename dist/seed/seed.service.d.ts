import { CorreoService } from '../correo/correo.service';
import { BrandsService } from '../brands/brands.service';
export declare class SeedService {
    private readonly correoService;
    private readonly brandsService;
    constructor(correoService: CorreoService, brandsService: BrandsService);
    populateDB(): string;
}
