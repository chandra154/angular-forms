import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PropertyFormComponent } from './property-form/property-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    CustomerFormComponent,
    PropertyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
