import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { GenresComponent } from './genres/genres.component';
import { BooksComponent } from './books/books.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './models/login-logout/auth.guard';
import { AccountComponent } from './account/account.component';
import { SignoutComponent } from './signout/signout.component';

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

  // { path: '', redirectTo: '/full', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'full', component: FullComponent, canActivate: [AuthGuard] },
  // { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
  // { path: 'genres', component: GenresComponent },
  // { path: 'user', component: UserComponent },
  // { path: '**', redirectTo: '/full' },

  { path: '', redirectTo: '/full', pathMatch: "full" },
  { path: 'full', component: FullComponent, canActivate : [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: FullComponent, canActivate: [AuthGuard],
    children: [
      { path: 'account', component: AccountComponent},
      { path: 'books', component: BooksComponent },
      { path: 'genres', component: GenresComponent },
      { path: 'user', component: UserComponent },
      { path: 'signout', component: SignoutComponent }
    ]
  },
  { path: '**', redirectTo: '/full' },
];


