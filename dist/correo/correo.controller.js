"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreoController = void 0;
const common_1 = require("@nestjs/common");
const correo_service_1 = require("./correo.service");
const create_correo_dto_1 = require("./dto/create-correo.dto");
let CorreoController = class CorreoController {
    constructor(correoService) {
        this.correoService = correoService;
    }
    getAllcorreo() {
        return this.correoService.findAll();
    }
    getCorreoById(id) {
        return this.correoService.findOneById(id);
    }
    createCorreo(CreateCorreoDto) {
        return this.correoService.create(CreateCorreoDto);
    }
    UpdateCorreoDto(id, updatecorreoDto) {
        return this.correoService.update(id, updatecorreoDto);
    }
    delete(id) {
        return this.correoService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CorreoController.prototype, "getAllcorreo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorreoController.prototype, "getCorreoById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_correo_dto_1.CreateCorreoDto]),
    __metadata("design:returntype", void 0)
], CorreoController.prototype, "createCorreo", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_correo_dto_1.CreateCorreoDto]),
    __metadata("design:returntype", void 0)
], CorreoController.prototype, "UpdateCorreoDto", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorreoController.prototype, "delete", null);
CorreoController = __decorate([
    (0, common_1.Controller)('correo'),
    __metadata("design:paramtypes", [correo_service_1.CorreoService])
], CorreoController);
exports.CorreoController = CorreoController;
//# sourceMappingURL=correo.controller.js.map