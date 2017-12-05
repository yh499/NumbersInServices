import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { Generate1Component } from './generate1/generate1.component';
import { Generate2Component } from './generate2/generate2.component';
import { Generate3Component } from './generate3/generate3.component';


@NgModule({
  declarations: [
    AppComponent,
    Generate1Component,
    Generate2Component,
    Generate3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
