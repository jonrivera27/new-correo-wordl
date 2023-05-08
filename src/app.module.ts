import { Module } from '@nestjs/common';
import { CorreoModule } from './correo/correo.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';



@Module({
  imports: [CorreoModule, BrandsModule , SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})

export class AppModule {}
