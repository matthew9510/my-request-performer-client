import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateEventComponent } from './create-event/create-event.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule
 } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';




@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatDatepickerModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
