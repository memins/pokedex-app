import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourcesComponent } from './sources/sources.component';
import { HeaderComponent } from './header/header.component';
import { PokedexService } from './shared/services/pokedex-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PokedexListComponent } from './pokedex/pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from './pokedex/pokedex-detail/pokedex-detail.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SourcesComponent,
    HeaderComponent,
    PokedexListComponent,
    PokedexDetailComponent,
    PokedexComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokedexService],
  bootstrap: [AppComponent],
})
export class AppModule {}
