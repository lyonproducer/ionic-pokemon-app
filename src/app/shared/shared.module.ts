import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PokemonCardComponent
  ],
  imports: [ CommonModule, IonicModule, FormsModule, ReactiveFormsModule ],
  exports: [HeaderComponent, PokemonCardComponent],
  providers: [],
})
export class SharedModule {}