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
exports.InstitutionMemberEntity = void 0;
var typeorm_1 = require("typeorm");
var institutionalOffer_entity_1 = require("../institutionalOffer/institutionalOffer.entity");
var institutionalRequest_entity_1 = require("../institutionalRequest/institutionalRequest.entity");
var InstitutionMemberEntity = /** @class */ (function () {
    function InstitutionMemberEntity() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'uuid' }),
        typeorm_1.Generated('uuid'),
        __metadata("design:type", String)
    ], InstitutionMemberEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return institutionalOffer_entity_1.InstitutionalOfferEntity; }, function (institutionalOffer) { return institutionalOffer.author; }),
        __metadata("design:type", Array)
    ], InstitutionMemberEntity.prototype, "institutionalOffersAsAuthor", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return institutionalOffer_entity_1.InstitutionalOfferEntity; }, function (institutionalOffer) { return institutionalOffer.author; }),
        __metadata("design:type", Array)
    ], InstitutionMemberEntity.prototype, "institutionalOffersAsContactPerson", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return institutionalRequest_entity_1.InstitutionalRequestEntity; }, function (institutionalRequest) { return institutionalRequest.author; }),
        __metadata("design:type", Array)
    ], InstitutionMemberEntity.prototype, "institutionalRequestsAsAuthor", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return institutionalRequest_entity_1.InstitutionalRequestEntity; }, function (institutionalRequest) { return institutionalRequest.author; }),
        __metadata("design:type", Array)
    ], InstitutionMemberEntity.prototype, "institutionalRequestsAsContactPerson", void 0);
    InstitutionMemberEntity = __decorate([
        typeorm_1.Entity('institutionalMembers')
    ], InstitutionMemberEntity);
    return InstitutionMemberEntity;
}());
exports.InstitutionMemberEntity = InstitutionMemberEntity;
