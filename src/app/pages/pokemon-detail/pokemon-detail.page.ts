import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from 'src/app/shared/interfaces/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

  id: string = '';
  pokemon!: Pokemon;
  segment = 'stats';

  constructor(
    private pokemonService: PokemonService,
    private activatedroute: ActivatedRoute,
    private navController: NavController
  ) { 
    this.activatedroute.paramMap.subscribe(
      (params: any)=> {
        console.log(params);
        this.id = params.params.id;
      }
    )
  }

  ngOnInit() {
    this.getPokemon(this.id);
  }

  getPokemon(url: string) {
    this.pokemonService.getPokemonById(url).subscribe(
      {
        next: (res: Pokemon) => {
          console.log('res ', res);
          this.pokemon = res;

          this.pokemon.moves.forEach(async element => {
            element['type'] = await lastValueFrom(this.pokemonService.getPokemonByUrl(element.move.url));
          });
        },
        error: (e) => {
          console.log('error ', e);
        },
        complete: () =>{

        }
      }
    );
  }

  goBack() {
    this.navController.back();
  }

}
