import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../shared/services/pokedex-service.service';
import { Pokemon, Pokemons } from '../../shared/pokemon.model';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  offset = 18;
  pokemon = [];

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  toTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  loadPokemon(loadMore = false) {
    if (loadMore) {
      this.offset += 20;
    }
    this.pokedexService.getPokemon(this.offset).subscribe((res) => {
      console.log('result:', res);
      this.pokemon = res;
    });
  }
}
