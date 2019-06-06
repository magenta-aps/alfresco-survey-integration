import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyExtensionComponent} from '../../projects/my-extension/src/lib/my-extension.component';

@NgModule({
  declarations: [
    AppComponent,
    MyExtensionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
