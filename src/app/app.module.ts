import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule  , ReactiveFormsModule } from '@angular/forms';

import { TestService } from './test/test.service';
import { FormComponent } from './form/form.component';
import { RecFormComponent } from './rec-form/rec-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormComponent,
    RecFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule , HttpClientModule
  ],
  providers:  [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
