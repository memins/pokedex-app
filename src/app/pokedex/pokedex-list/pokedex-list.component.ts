import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../shared/services/pokedex-service.service';
import { Pokemon, Pokemons } from '../../shared/pokemon.model';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  offset = 10;
  pokemonList: Pokemons[];
  pokemons: Pokemon;
  pokemon = [];

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokedexService.getPokemon(this.offset).subscribe((res) => {
      console.log('result:', res);
      this.pokemon = res;
    });
  }
}
