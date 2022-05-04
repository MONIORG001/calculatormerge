import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ScienctificCalculatorComponent } from './scienctific-calculator/scienctific-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ScienctificCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
