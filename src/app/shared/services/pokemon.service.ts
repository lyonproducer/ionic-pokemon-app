import { Injectable } from '@angular/core';
import { URI } from '../contants/contants';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../interfaces/pokemon.model';
import { List } from '../interfaces/list.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList() {
    const url = `${environment.apiUrl}${URI.GET_POKEMON_LIST}`;
    return this.http.get<List>(url);
  }

  getPokemonById(url: string) {
    return this.http.get<Pokemon>(url);
  }
}
