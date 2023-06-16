import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FirstPageComponent } from "./first.component";
import { SecondPageComponent } from "./second.component";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from 'piral-ng/common';
import { Tile } from "../Tile";

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  exports: [
    AppComponent,
    Tile
  ],
})
export class AppModule { }
