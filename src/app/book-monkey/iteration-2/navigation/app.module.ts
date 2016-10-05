// TODO Optimize Build-Process to automatically switch imports
// TODO Please do not remove the following line
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // NEW
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BookStoreService } from './shared/book-store.service';
// TODO Optimize Build-Process to automatically switch imports
// TODO Please do not remove the following line
// import { AppRoutingModule } from './app-routing.module'; // NEW
import { AppRoutingModule } from './app-routing.module.1';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent
  ],
  imports: [
    // TODO Optimize Build-Process to automatically switch imports
    // TODO Please do not remove the following line
    // BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    BookStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
