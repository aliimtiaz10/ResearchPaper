import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaperComponent } from './paper/paper.component';
import { PaperDetailComponent } from './paper-detail/paper-detail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ManupilateComponent } from './manupilate/manupilate.component';


@NgModule({
  declarations: [
    AppComponent,
    PaperComponent,
    PaperDetailComponent,
    ManupilateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
