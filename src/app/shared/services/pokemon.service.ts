import { Injectable } from '@angular/core';
import { POKEAPI_URL, URI } from '../contants/contants';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  uri = POKEAPI_URL;

  constructor(private http: HttpClient) { }

  getPokemonList() {
    const url = `${environment.apiUrl}${URI.GET_POKEMON_LIST}`;
    return this.http.get(url);
  }

  register(id: number) {
    const url = `${environment.apiUrl}${URI.GET_POKEMON_DETAIL}`.replace(':id', id.toString());
    return this.http.get(url);
  }
}
