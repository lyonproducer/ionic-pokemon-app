import { Injectable } from '@angular/core';
import { URI } from '../contants/contants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../interfaces/pokemon.model';
import { List } from '../interfaces/list.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(paramsQuery?: any) {
    let params = new HttpParams();
    if(paramsQuery?.offset) {
      params = params.append('offset', paramsQuery.offset);
    }
    if(paramsQuery?.limit) {
      params = params.append('limit', paramsQuery.limit);
    }
    const url = `${environment.apiUrl}${URI.GET_POKEMON_LIST}`;
    return this.http.get<List>(url, {params});
  }

  getPokemonByUrl(url: string) {
    return this.http.get<Pokemon>(url);
  }

  getPokemonById(id: string) {
    const url = `${environment.apiUrl}${URI.GET_POKEMON_DETAIL}`.replace(':id', id);
    return this.http.get<Pokemon>(url);
  }
}
