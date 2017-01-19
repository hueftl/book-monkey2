import { Injectable } from '@angular/core';

import { Book, Thumbnail } from './book';

@Injectable()
export class BookStoreService {
  books: Book[];

  constructor() {
    this.books = [
      new Book(
        '9783864903571',
        'Angular',
        ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'],
        new Date(2017, 3, 1),
        'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen',
        5,
        [new Thumbnail('https://angular-buch.com/angular-buch.jpg', 'Buchcover')],
        'Dieses Buch vermittelt einen Schnelleinstieg in Angular...'
      ),
      new Book(
        '9783864901546',
        'AngularJS',
        ['Philipp Tarasiewicz', 'Robin Böhm'],
        new Date(2014, 5, 29),
        'Eine praktische Einführung',
        5,
        [new Thumbnail('https://goo.gl/Y5lFVE', 'Buchcover')],
        'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...'
      )
    ];
  }

  getAll() {
    return this.books;
  }
}
