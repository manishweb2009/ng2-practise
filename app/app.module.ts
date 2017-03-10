import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AhHeader } from './header/header.component';
import { AhFooter } from './footer/footer.component';
import { AhContent } from './content/content.component';

@NgModule({
  imports: [ BrowserModule
],
  declarations: [ AppComponent, AhHeader, AhFooter, AhContent
],
  bootstrap: [ AppComponent ]
})
export class AppModule {}