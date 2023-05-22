import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { List, Result } from 'src/app/shared/interfaces/list.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.page.html',
  styleUrls: ['./home-list.page.scss'],
})
export class HomeListPage implements OnInit {

  pokemonList :Result[] = [];
  offset = 0;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(ev?: InfiniteScrollCustomEvent) {
 
    const params = {
      limit: 5,
      offset: this.offset
    }
    
    this.pokemonService.getPokemonList(params).subscribe(
      {
        next: (res: List) => {
          console.log('res ', res);
          res.results.forEach(pokemon => {
            this.pokemonList.push(pokemon);
          });
        },
        error: (e) => {
          console.log('error ', e);
        },
        complete: () =>{
          this.offset = this.pokemonList.length;
          if(ev) {
            ev.target.complete();
          }
        }
      }
    );
  }

  onIonInfinite(event: any) {
    this.getPokemons(event);
  }
}
