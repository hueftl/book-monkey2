import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'iteration-1',
    loadChildren: 'app/book-monkey/iteration-1/iteration-1.module'
  },
  {
    path: 'iteration-2',
    loadChildren: 'app/book-monkey/iteration-2/iteration-2.module'
  },
  {
    path: 'iteration-3',
    loadChildren: 'app/book-monkey/iteration-3/iteration-3.module'
  },
  {
    path: 'iteration-4',
    loadChildren: 'app/book-monkey/iteration-4/iteration-4.module'
  },
  {
    path: 'iteration-5',
    loadChildren: 'app/book-monkey/iteration-5/iteration-5.module'
  }
];

export const routing = RouterModule.forRoot(routes);
