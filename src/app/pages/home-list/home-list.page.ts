import { Component, OnInit } from '@angular/core';
import { List, Result } from 'src/app/shared/interfaces/list.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.page.html',
  styleUrls: ['./home-list.page.scss'],
})
export class HomeListPage implements OnInit {

  pokemonList :Result[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(
      {
        next: (res: List) => {
          console.log('res ', res);
          this.pokemonList = res.results;
          
        },
        error: (e) => {
          console.log('error ', e);
        },
        complete: () => console.info('complete') 
      }
    );
  }

}
