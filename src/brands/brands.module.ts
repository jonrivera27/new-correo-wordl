import { Module } from '@nestjs/common';
import { CorreoModule } from 'src/correo/correo.module';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';


@Module({
  imports: [CorreoModule, BrandsModule],
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService],
})
export class BrandsModule {}
