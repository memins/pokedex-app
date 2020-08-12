import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PokedexDetailComponent } from './pokedex-detail.component';

describe('PokedexDetailComponent', () => {
  let component: PokedexDetailComponent;
  let fixture: ComponentFixture<PokedexDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexDetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
