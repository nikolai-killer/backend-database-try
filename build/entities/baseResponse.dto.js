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
exports.BaseResponseDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var BaseResponseDto = /** @class */ (function () {
    function BaseResponseDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], BaseResponseDto.prototype, "id", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: Date }),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], BaseResponseDto.prototype, "createdAt", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: Date }),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], BaseResponseDto.prototype, "updatedAt", void 0);
    return BaseResponseDto;
}());
exports.BaseResponseDto = BaseResponseDto;
