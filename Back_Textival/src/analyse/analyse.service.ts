import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAnalyseDto } from './dto/create-analyse.dto';
import { UpdateAnalyseDto } from './dto/update-analyse.dto';
import { Analyse } from './entities/analyse.entity';

@Injectable()
export class AnalyseService {

  constructor(
    @InjectRepository (Analyse) private readonly analyseRepository: Repository<Analyse>,
  ) {}

  
  createAnalyse(createAnalyseDto: CreateAnalyseDto) {
    const analyse: Analyse = new Analyse();
    analyse.code = createAnalyseDto.code;
    analyse.libelle = createAnalyseDto.libelle;
    analyse.theme = createAnalyseDto.theme;
    analyse.clt = createAnalyseDto.clt;
    analyse.qt = createAnalyseDto.qt;
    analyse.nbr = createAnalyseDto.nbr;
    //gamme.date = createGammeDto.date;
    analyse.cmt = createAnalyseDto.cmt;
    return this.analyseRepository.save(analyse);
  }


  findAllAnalyse(): Promise <Analyse[]>{
    return this.analyseRepository.find();
  }

  findOneAnalyse(id: number) : Promise <Analyse> {
    return this.analyseRepository.findOneBy({ id });
  }

  updateAnalyse(id: number, updateAnalyseDto: UpdateAnalyseDto) {
    const analyse: Analyse = new Analyse();
    
    analyse.code = updateAnalyseDto.code;
    analyse.libelle = updateAnalyseDto.libelle;

    analyse.code = updateAnalyseDto.code;
    analyse.libelle = updateAnalyseDto.libelle;
    analyse.theme = updateAnalyseDto.theme;
    analyse.clt = updateAnalyseDto.clt;
    analyse.qt = updateAnalyseDto.qt;
    analyse.nbr = updateAnalyseDto.nbr;
    //analyse.date = updateAnalyseDto.date;
    analyse.cmt = updateAnalyseDto.cmt;

   
    return this.analyseRepository.save(analyse);
  }

  removeAnalyse(id: number): Promise<{ affected?: number }> {
    return this.analyseRepository.delete(id);
  }
}
