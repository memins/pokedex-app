import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokedexService } from './pokedex-service.service';

describe('PokedexServiceService', () => {
  let pokedoxService: PokedexService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [PokedexService],
    });

    pokedoxService = TestBed.get(PokedexService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  // it('shoud get Pokemons', () => {
  //   const someProducts = [
  //     { id: 1, name: 'Product001', cost: 10, quantity: 100 },
  //     { id: 2, name: 'Product002', cost: 100, quantity: 200 },
  //     { id: 3, name: 'Product003', cost: 200, quantity: 300 },
  //   ];

  //   pokedoxService.getPokemon().subscribe((pokemons) => {
  //     expect(pokemons).toBeTruthy('No Pokemons returned!');
  //     expect(pokemons.length).toBe(13, 'incorrent number of Pokemnons');

  //     const pokemon = pokemons.find((pokemon) => pokemon.id == 132);
  //     expect(pokemon.id).toBe('ditto');
  //   });

  //   const req = httpTestingController.expectOne(
  //     `${pokedoxService.baseURL}/pokemon?limit=12&offset=12`
  //   );

  //   expect(req.request.method).toEqual('GET');
  //   req.flush(someProducts);
  // });
});
