import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { HorseComponent } from './components/horse/horse.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const appRoutes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'black-jack', component: BlackJackComponent },
  { path: 'horse', component: HorseComponent },
  { path: 'make-up-table', component: MakeUpTableComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AngularLogoComponent,
    BlackJackComponent,
    HorseComponent,
    MakeUpTableComponent,
    NotFoundComponent,
    MainMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
