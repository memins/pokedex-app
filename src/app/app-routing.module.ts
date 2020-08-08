import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourcesComponent } from './sources/sources.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexListComponent } from './pokedex/pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from './pokedex/pokedex-detail/pokedex-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sources', component: SourcesComponent },
  {
    path: 'pokedex',
    component: PokedexComponent,
    children: [
      { path: '', component: PokedexListComponent },
      { path: 'detail', component: PokedexDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
