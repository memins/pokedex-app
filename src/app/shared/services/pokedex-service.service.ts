import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pokemon } from '../pokemon.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  baseURL = 'https://pokeapi.co/api/v2';
  imageURL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(limit = 0, offset = 0) {
    return this.http
      .get(`${this.baseURL}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        map((result) => {
          return result['results'];
        }),
        map((pokemons) => {
          return pokemons.map((poke, index) => {
            poke.image = this.getPokeImage(index + offset + 1);
            poke.pokeIndex = offset + index + 1;
            return poke;
          });
        })
      );
  }

  getPokeImage(index) {
    return `${this.imageURL}${index}.png`;
  }

  findPokemon(search) {
    return this.http.get(`${this.baseURL}/pokemon/${search}`).pipe(
      map((pokemon) => {
        pokemon['image'] = this.getPokeImage(pokemon['id']);
        pokemon['pokeIndex'] = pokemon['id'];
        return pokemon;
      })
    );
  }

  getPokemonDetail(index) {
    return this.http.get(`${this.baseURL}/pokemon/${index}`).pipe(
      map((poke) => {
        let sprites = Object.keys(poke['sprites']);
        poke['images'] = sprites
          .map((spriteKey) => poke['sprites'][spriteKey])
          .filter((img) => img);
        return poke;
      })
    );
  }

  getPokemonEvolution(index) {
    return this.http.get(`${this.baseURL}/evolution-chain/${index}`);
  }
}
