import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { BooksComponent } from './books/books.component';
import { AddNewBookComponent } from './books/add-new-book/add-new-book.component';
import { ForbiddenValidatorDirective } from './forbidden-name/forbidden-name-directive';
import { GenresComponent } from './genres/genres.component';
import { GenreService } from './models/genre.service';
import { BookService } from './models/book.service';
import { BannerService } from './models/banner.service';
import { NgxEditorModule } from 'ngx-editor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserComponent } from './user/user.component';
import { GenreValidator } from './genre-required/genre-required.directive';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './models/login-logout/auth.guard';
import { AuthenticationService } from './models/login-logout/authentication.service';
import { UserService } from './models/login-logout/user.service';
import { JwtInterceptor } from './models/login-logout/jwt.interceptor';
import { AccountComponent } from './account/account.component';
import { LoginStatusService } from './models/login-logout/login-status.service';
import { SearchComponent } from './books/search/search.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,
    BooksComponent,
    AddNewBookComponent,
    ForbiddenValidatorDirective,
    GenreValidator,
    GenresComponent,
    UserComponent,
    LoginComponent,
    AccountComponent,
    SearchComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false }),
    PerfectScrollbarModule,
    NgxEditorModule,
  ],
  providers: [
    GenreService,
    BookService,
    BannerService,
    AuthGuard,
    AuthenticationService,
    UserService,
    LoginStatusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
      {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
