import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }