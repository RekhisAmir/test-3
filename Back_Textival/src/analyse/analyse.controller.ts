import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalyseService } from './analyse.service';
import { CreateAnalyseDto } from './dto/create-analyse.dto';
import { UpdateAnalyseDto } from './dto/update-analyse.dto';

@Controller('analyse')
export class AnalyseController {
  constructor(private readonly analyseService: AnalyseService) {}

  @Post('/addAnalyse')
  create(@Body() createAnalyseDto: CreateAnalyseDto) {
    return this.analyseService.createAnalyse(createAnalyseDto);
  }

  @Get('/allAnalyse')
  findAll() {
    return this.analyseService.findAllAnalyse();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analyseService.findOneAnalyse(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalyseDto: UpdateAnalyseDto) {
    return this.analyseService.updateAnalyse(+id, updateAnalyseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analyseService.removeAnalyse(+id);
  }
}
