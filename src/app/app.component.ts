import { Component, OnInit } from '@angular/core';

import { PokedexService } from './shared/services/pokedex-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {}
}
