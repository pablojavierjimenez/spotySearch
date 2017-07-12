/**
 * IMPORT ANGULAR MODULES
 * here you should import all the angular core modules
 * that you use or need
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * IMPORT APP COMPONENTS
 * here you import all the components created by your own.
 */
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { ExampleFeatureModule } from './example-feature/example-feature.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ExampleFeatureModule
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
