import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHightlightDirective } from './basic-highlight/basic-hightlight.directive';
import { BetterHightlightDirective } from './better-highlight/better-hightlight.directive';
import { UnlessDirective } from './unless-directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective,
    BetterHightlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
