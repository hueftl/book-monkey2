import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {BookMonkeyAppComponent as BookDetailsApp} from './book-details/index';
import {BookMonkeyAppComponent as BookListApp} from './book-list/index';
import {BookMonkeyAppComponent as BookListRefactoredApp} from './book-list-refactored/index';

import {ActiveClassDirective} from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-1',
  template: `
    <div class="ui three small ordered steps">
      <a [routerLink]="['book-list']"
         activeClass="active"
         class="step">
        <div class="content">
          <div class="title">Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['book-list-refactored']"
         activeClass="active"
         class="step">
        <div class="content">
          <div class="title">Verbesserte Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['book-details']"
         activeClass="active"
         class="step">
        <div class="content">
          <div class="title">Detailansicht</div>
        </div>
      </a>
    </div>
    <div class="ui raised padded container segment">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})
@Routes([
  {path: '/book-list',            component: BookListApp},
  {path: '/book-list-refactored', component: BookListRefactoredApp},
  {path: '/book-details',         component: BookDetailsApp}
])
export class IterationOneComponent { }