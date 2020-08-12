import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokedexListComponent } from './pokedex-list.component';
import { PokedexService } from 'src/app/shared/services/pokedex-service.service';

describe('PokedexListComponent', () => {
  let component: PokedexListComponent;
  let fixture: ComponentFixture<PokedexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // it('shoud get data from service', () => {
  //   let dataService = fixture.debugElement.injector.get(PokedexService);
  //   fixture.detectChanges();
  //   expect(dataService.getPokemon).toEqual(component.loadPokemon);
  // });
});
