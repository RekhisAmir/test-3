import { Controller, 
  Get,
   Post,
    Body,
     Patch,
      Param,
       Delete } from '@nestjs/common';
import { GammeService } from './gamme.service';
import { CreateGammeDto } from './dto/create-gamme.dto';
import { UpdateGammeDto } from './dto/update-gamme.dto';

@Controller('Gamme')

export class GammeController {
constructor(private readonly gammeService: GammeService) {}

  @Post('/addGamme')
  create(@Body() createGammeDto: CreateGammeDto) {
    
    console.log("eeee",createGammeDto);
    
    return this.gammeService.createGamme(createGammeDto);

  }

  @Get('/allGamme')
  findAll() {
    return this.gammeService.findAllGamme();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gammeService.findOneGamme(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGammeDto: UpdateGammeDto) {
    return this.gammeService.updateGamme(+id, updateGammeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gammeService.removeGamme(+id);
  }
}
