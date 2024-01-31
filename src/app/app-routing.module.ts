import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './pages/board/board.component';
import { WorkBoardComponent } from './pages/work-board/work-board.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "boards", component: BoardComponent },
  { path: "workboard", component: WorkBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
