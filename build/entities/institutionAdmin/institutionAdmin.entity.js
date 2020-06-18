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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionAdminEntity = void 0;
var typeorm_1 = require("typeorm");
var institution_entity_1 = require("../institution/institution.entity");
var InstitutionAdminEntity = /** @class */ (function () {
    function InstitutionAdminEntity() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'uuid' }),
        typeorm_1.Generated('uuid'),
        __metadata("design:type", String)
    ], InstitutionAdminEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return institution_entity_1.InstitutionEntity; }, function (institution) { return institution.institutionAdmin; }),
        __metadata("design:type", institution_entity_1.InstitutionEntity)
    ], InstitutionAdminEntity.prototype, "institution", void 0);
    InstitutionAdminEntity = __decorate([
        typeorm_1.Entity('institutionAdmins')
    ], InstitutionAdminEntity);
    return InstitutionAdminEntity;
}());
exports.InstitutionAdminEntity = InstitutionAdminEntity;
