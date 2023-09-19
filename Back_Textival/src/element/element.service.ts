import { Injectable } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Element } from './entities/element.entity';

@Injectable()
export class ElementService {

  constructor(
    @InjectRepository (Element) private readonly elementRepository: Repository<Element>,
  ) {}


  create(createElementDto: CreateElementDto): Promise<Element> {
    const element: Element= new Element();
    element.code = createElementDto.code;
    element.libelle = createElementDto.libelle;

    return this.elementRepository.save(element);
  }

  findAll(): Promise <Element[]> {
    return this.elementRepository.find();
  }

  findOne(id: number): Promise <Element> {
    return this.elementRepository.findOneBy({id});
  }

  update(id: number, updateElementDto: UpdateElementDto):Promise <Element> {

    const element: Element = new Element();

    element.id = id;
    element.code = updateElementDto.code;
    element.libelle = updateElementDto.libelle;

    return this.elementRepository.save(element);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.elementRepository.delete(id);
  }
}
