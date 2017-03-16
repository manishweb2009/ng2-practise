import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './PageNotFound.component';

import { AhHeader } from './header/header.component';
import { AhFooter } from './footer/footer.component';
import { AhContent } from './content/content.component';

import { AhBanner } from './shared/models/banner/banner.component';
import { AhSidebar } from './shared/models/sidebar/sidebar.component';
import { ahLoading } from './shared/models/loading/loading.component';
import { AhTiles } from './shared/models/tiles/tiles.component';
import { AhDynamicTiles } from './shared/models/dynamic-tiles/dynamic-tiles.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, 
                  AhHeader, AhFooter, AhContent,
                  AhBanner, AhSidebar, ahLoading, AhTiles, AhDynamicTiles,
                  HomeComponent, AboutComponent, ContactComponent, PageNotFoundComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }