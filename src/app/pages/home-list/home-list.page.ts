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
  limit = 10;
  searchMode = false;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.limit = 10;
    this.getPokemons();
  }

  getPokemons(ev?: InfiniteScrollCustomEvent) {
    
    const params = {
      limit: this.limit,
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

  onHandleSearch(event: any) {
    
    console.log('event ', event)

    if(event === '') {
      this.limit = 10;
      this.offset = 0;
      this.searchMode = false;
      this.pokemonList = [];
      this.getPokemons();
      return;
    } else {
      this.searchMode = true;
    }

    this.pokemonList = [];

    const params = {
      limit: 1200,
      offset: 0
    }

    this.pokemonService.getPokemonList(params).subscribe(
      {
        next: (res: List) => {
          console.log('res ', res);
          res.results.forEach(pokemon => {
            this.pokemonList.push(pokemon);
          });
          this.pokemonList = this.pokemonList.filter(el=> el.name.indexOf(event) > -1);
          console.log('filtered ', this.pokemonList);
        },
        error: (e) => {
          console.log('error ', e);
        }
      }
    );
  } 
}
