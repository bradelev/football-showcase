import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersBoardComponent } from './players-board.component';


const routes: Routes = [
  {
    path: '',
    component: PlayersBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersBoardRoutingModule { }
