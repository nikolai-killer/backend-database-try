import { Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator';
import { BaseEntity } from '../base.entity';
import { InstitutionEntity } from '../institution/institution.entity';
import { InstitutionMemberEntity } from '../institutionMember/institutionMember.entity';
import { AddressEntity } from '../address/address.entity';

export abstract class InstitutionalItemEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Column('int')
  @IsOptional()
  @IsInt()
  @IsPositive()
  capacity?: number;

  @Column('int')
  @IsOptional()
  @IsInt()
  @IsPositive()
  frequency?: number;

  @Column('date')
  @IsOptional()
  @IsDate()
  date?: Date;

  @Column('time with time zone')
  @IsOptional()
  @IsString()
  startTime?: string;

  @Column('time with time zone')
  @IsOptional()
  @IsString()
  endTime?: string;

  @Column('point')
  @IsOptional()
  @IsString()
  location?: string | Object;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  institutionId: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  authorId: string;

  @Column('uuid')
  @IsOptional()
  @IsUUID('4')
  contactPersonId?: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  rewardDefinitionId: string;

  @Column('uuid')
  @IsOptional()
  @IsUUID('4')
  addressId?: string;

  /*
   * Relations
   * */
  @OneToOne(() => AddressEntity)
  @JoinColumn()
  address?: AddressEntity;
}
