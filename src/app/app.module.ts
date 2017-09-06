/**
 * Angular Component Imports
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Application Component Imports
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { AlbumComponent } from './Components/pages/album/album.component';
import { ArtistComponent } from './Components/pages/artist/artist.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { SearchComponent } from './Components/search/search.component';
import { ArtistListComponent } from './Components/artist-list/artist-list.component';

/**
 * NgModule Configuration component
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AlbumComponent,
    ArtistComponent,
    routedComponents,
    SearchComponent,
    ArtistListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
