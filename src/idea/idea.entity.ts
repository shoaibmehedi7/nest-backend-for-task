import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('idea')
  export class IdeaEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
  
    @CreateDateColumn() created: Date;
  
    @Column('text') country: string;
  
    @Column('text') language: string;
  }
  