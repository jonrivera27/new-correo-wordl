import { Injectable } from '@nestjs/common';
import { CORREO_SEED } from './data/correo.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CorreoService } from '../correo/correo.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  

    constructor (
      private readonly correoService:CorreoService,
      private readonly brandsService:BrandsService
    ){}
    
    populateDB(){

      //CORREO_SEED
      //BRANDS_SEED
      this.correoService.fillCorreoWhithSeedData(CORREO_SEED);
      this.brandsService.fillCoreeoWithSeedData(BRANDS_SEED);
      return 'Seed executed';

    }
}
