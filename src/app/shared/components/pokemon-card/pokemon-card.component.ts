import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/list.model';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent  implements OnInit {

  @Input() pokemonInput!: Result;

  pokemonData!: Pokemon;
  
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonById(this.pokemonInput.url).subscribe(
      {
        next: (res: Pokemon) => {
          console.log('res ', res);
          this.pokemonData = res;
        },
        error: (e) => {
          console.log('error ', e);
        },
        complete: () => console.info('complete') 
      }
    );
  }

  getId() {
    const array = this.pokemonInput.url.split('/');
    return array[array.length - 2];
  }

}
