import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { BoardComponent } from './pages/board/board.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DialogModule} from '@angular/cdk/dialog';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { LateralBoardComponent } from './components/lateral-board/lateral-board.component';
import { BodyBoardComponent } from './components/body-board/body-board.component';
import { WorkBoardComponent } from './pages/work-board/work-board.component';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    BoardComponent,
    NavbarComponent,
    LateralBoardComponent,
    BodyBoardComponent,
    WorkBoardComponent,
    TodoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
