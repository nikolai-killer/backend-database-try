import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { InstitutionEntity } from '../institution/institution.entity';
import { Type } from 'class-transformer';
import { BaseResponseDto } from '../baseResponse.dto';

export class GetCategoryDto extends BaseResponseDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  name: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  description: string;
}

export class GetCategoryWithRelationsDto extends GetCategoryDto {
  @ApiProperty({ type: InstitutionEntity, required: false, isArray: true })
  @IsOptional()
  @Type(() => InstitutionEntity)
  institutions: InstitutionEntity[];
}

export const serialize = {
  get: GetCategoryWithRelationsDto,
  create: GetCategoryDto
};
