import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex-service.service';

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.scss'],
})
export class PokedexDetailComponent implements OnInit {
  details: any;
  evolutions: any;
  // pokemons: Pokemon[];

  constructor(
    private pokedexService: PokedexService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    const index = this.router.snapshot.paramMap.get('index');
    this.pokedexService.getPokemonDetail(index).subscribe((details) => {
      console.log('Pokemon Details: ', details);
      this.details = details;
      // this.pokemons = details;
    });
    this.pokedexService.getPokemonEvolution(index).subscribe((evolutions) => {
      this.evolutions = evolutions;
    });
  }
}
