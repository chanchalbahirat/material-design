import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule, MatTableModule, MatPaginatorModule, MatToolbarModule, MatSidenavModule, MatListModule} from '@angular/material';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TableComponent,
    NavigationComponent
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
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: CardsComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
