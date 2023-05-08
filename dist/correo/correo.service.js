"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreoService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CorreoService = class CorreoService {
    constructor() {
        this.Correo = [];
    }
    findAll() {
        return this.Correo;
    }
    findOneById(id) {
        const correo = this.Correo.find(Correo => Correo.id === id);
        if (!correo)
            throw new common_1.NotFoundException(`correo with id '${id}' not found`);
        return correo;
    }
    create(CreateCorreoDto) {
        const Correo = Object.assign({ id: (0, uuid_1.v4)() }, CreateCorreoDto);
        this.Correo.push(Correo);
        return Correo;
    }
    update(id, updateCorreoDto) {
        let correoDB = this.findOneById(id);
        if (updateCorreoDto.id && updateCorreoDto.id !== id)
            throw new common_1.BadRequestException(`Correo id is not valid inside body`);
        this.Correo = this.Correo.map(correo => {
            if (correo.id === id) {
                correoDB = Object.assign(Object.assign(Object.assign({}, correoDB), this.UpdateCorreoDto), { id });
                return correoDB;
            }
            return correo;
        });
        return correoDB;
    }
    delete(id) {
        const correo = this.findOneById(id);
        this.Correo = this.Correo.filter(correo => correo.id == id);
        return;
    }
    fillCorreoWhithSeedData(correo) {
        this.correo = correo;
    }
};
CorreoService = __decorate([
    (0, common_1.Injectable)()
], CorreoService);
exports.CorreoService = CorreoService;
//# sourceMappingURL=correo.service.js.map