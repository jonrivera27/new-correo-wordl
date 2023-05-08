import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
export declare class BrandsService {
    fillCoreeoWithSeedData(BRANDS_SEED: Brand[]): void;
    private brands;
    create(createBrandDto: CreateBrandDto): Brand;
    findAll(): Brand[];
    findOne(id: string): Brand;
    update(id: string, updateBrandDto: UpdateBrandDto): Brand;
    remove(id: string): void;
    fillCorreoWithSeedData(brands: Brand[]): void;
}
