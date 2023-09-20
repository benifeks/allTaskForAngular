import { NgModule } from '@angular/core';
//------routing----------
import { Routes, RouterModule } from '@angular/router';
//----------------
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './components/headline/headline.component';

import { AllStudentsBlockComponent } from './components/all-students-block/all-students-block.component';
import { StudentBlockComponent } from './components/all-students-block/student-block/student-block.component';
import { InputBlockComponent } from './components/all-students-block/input-block/input-block.component';
import { VariablesBlockComponent } from './components/all-students-block/variables-block/variables-block.component';

import { SideBarComponent } from './components/horses/side-bar/side-bar.component';
import { HorsesComponent } from './components/horses/horses.component';
import { FieldsComponent } from './components/horses/fields/fields.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { SidebarBlackjackComponent } from './components/black-jack/sidebar-blackjack/sidebar-blackjack.component';
import { FieldBlackjackComponent } from './components/black-jack/field-blackjack/field-blackjack.component';
import { VentureComponent } from './components/black-jack/venture/venture.component';

//--routing---
 const appRoutes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'all-students-block', component: AllStudentsBlockComponent},
  {path: 'horses', component: HorsesComponent},
  {path: 'black-jack', component: BlackJackComponent},
  {path: '**', component: NotFoundComponent}
 ]
//------

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,

    AllStudentsBlockComponent,
    StudentBlockComponent,
    InputBlockComponent,
    VariablesBlockComponent,

    SideBarComponent,
    HorsesComponent,
    FieldsComponent,
    MainMenuComponent,
    NotFoundComponent,
    BlackJackComponent,
    SidebarBlackjackComponent,
    FieldBlackjackComponent,
    VentureComponent,
  ],
  //////////routing///////////
  imports: [BrowserModule, AppRoutingModule, 
  RouterModule.forRoot(appRoutes)],
  ////////////////////
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
