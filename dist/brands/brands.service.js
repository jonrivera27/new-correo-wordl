"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let BrandsService = class BrandsService {
    constructor() {
        this.brands = [];
    }
    fillCoreeoWithSeedData(BRANDS_SEED) {
        throw new Error('Method not implemented.');
    }
    create(createBrandDto) {
        const { email } = createBrandDto;
        const brand = {
            id: (0, uuid_1.v4)(),
            email: email.toLocaleLowerCase(),
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        };
        this.brands.push(brand);
        return brand;
    }
    findAll() {
        return this.brands;
    }
    findOne(id) {
        const brand = this.brands.find(brand => brand.id === id);
        if (!brand)
            throw new common_1.NotFoundException(`Brand with id "${id}" not found`);
        return brand;
    }
    update(id, updateBrandDto) {
        let brandDB = this.findOne(id);
        this.brands = this.brands.map(brand => {
            if (brand.id === id) {
                brandDB.updatedAt = new Date().getTime();
                brandDB = Object.assign(Object.assign({}, brandDB), updateBrandDto);
                return brandDB;
            }
            return brand;
        });
        return brandDB;
    }
    remove(id) {
        this.brands = this.brands.filter(brand => brand.id !== id);
    }
    fillCorreoWithSeedData(brands) {
        this.brands = brands;
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)()
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map