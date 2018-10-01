import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormPalowanComponent } from './form-palowan/form-palowan.component';
import { PalowanInfoComponent } from './palowan-info/palowan-info.component';
import { HierarchyPalowanComponent } from './hierarchy-palowan/hierarchy-palowan.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPalowanComponent,
    PalowanInfoComponent,
    HierarchyPalowanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
