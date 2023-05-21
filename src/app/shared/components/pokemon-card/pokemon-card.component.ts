import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from '../../interfaces/interfaces';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent  implements OnInit {

  @Input() pokemon!: PokemonList;
  constructor() { }

  ngOnInit() {}

}
