import { BASE_PATH as backendUrl } from './../../src-gen/variables';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// PrimeFaces Modules
import { ButtonModule } from 'primeng/button';
// Our Modules
import { AppComponent } from './app.component';
import { ApiModule } from '../../src-gen';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ApiModule,
  ],
  providers: [
    { provide: backendUrl, useValue: 'http://localhost:8080' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
