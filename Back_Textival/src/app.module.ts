import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GammeModule } from './gamme/gamme.module';
import { AnalyseModule } from './analyse/analyse.module';
//import { AuthModule } from './auth/auth.module';
import { Gamme } from './gamme/entities/gamme.entity';
import { Analyse } from './analyse/entities/analyse.entity';

import { MachineModule } from './machine/machine.module';

import { SousEnsembleModule } from './sous-ensemble/sous-ensemble.module';
import { MacroElementModule } from './macro-element/macro-element.module';
import { SousEnsemble } from './sous-ensemble/entities/sous-ensemble.entity';
import { MacroElement } from './macro-element/entities/macro-element.entity';
import { Machine } from './machine/entities/machine.entity';
import { ElementModule } from './element/element.module';
import { Element } from './element/entities/element.entity';
import { TailleModule } from './taille/taille.module';
import { Taille } from './taille/entities/taille.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Amir(1989)',
      entities: [Gamme,Analyse,SousEnsemble,MacroElement,Machine,Element,Taille,], // ici nous ont ajouté l'entité  dans 
      database: 'Textival',
      synchronize: true,
      logging: true,
    }),
   GammeModule,
   AnalyseModule,
   MachineModule,
   SousEnsembleModule,
   MacroElementModule,
   ElementModule,
   TailleModule,
   //AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
