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
exports.dto = exports.CreateInstitutionDto = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var responses_dto_1 = require("../category/responses.dto");
var class_transformer_1 = require("class-transformer");
var CreateInstitutionDto = /** @class */ (function () {
    function CreateInstitutionDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateInstitutionDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateInstitutionDto.prototype, "description", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: responses_dto_1.GetCategoryDto }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsArray(),
        class_transformer_1.Type(function () { return responses_dto_1.GetCategoryDto; }),
        __metadata("design:type", Array)
    ], CreateInstitutionDto.prototype, "categories", void 0);
    return CreateInstitutionDto;
}());
exports.CreateInstitutionDto = CreateInstitutionDto;
exports.dto = {
    create: CreateInstitutionDto
};
