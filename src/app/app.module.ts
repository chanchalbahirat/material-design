import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatPaginatorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }