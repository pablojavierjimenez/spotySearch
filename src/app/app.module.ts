/**
 * Angular Component Imports
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Application Component Imports
 */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

/**
 * NgModule Configuration component
 */
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    HeaderComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }