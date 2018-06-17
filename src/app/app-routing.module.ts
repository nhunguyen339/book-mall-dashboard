import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { GenresComponent } from './genres/genres.component';
import { BooksComponent } from './books/books.component';
import { UserComponent } from './user/user.component';

export const Approutes: Routes = [
  // {
  //   path: '',
  //   component: FullComponent,
  //   children: [
  //     { path: '', redirectTo: '/starter', pathMatch: 'full' },
  //     { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
  //     { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
  //   ]
  // },
  {  path: '',  redirectTo: '/books',  pathMatch: 'full'},
  {  path: 'books', component: BooksComponent },
  {  path: 'genres', component: GenresComponent },
  {  path: 'user', component: UserComponent },
  {  path: '**', redirectTo: '/books'}];


