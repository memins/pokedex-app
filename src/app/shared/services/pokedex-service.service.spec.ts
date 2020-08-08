import { TestBed } from '@angular/core/testing';

import { PokedexServiceService } from './pokedex-service.service';

describe('PokedexServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokedexServiceService = TestBed.get(PokedexServiceService);
    expect(service).toBeTruthy();
  });
});
