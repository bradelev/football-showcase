import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Urls } from './core/enums/urls.enum';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },
  {
    path: Urls.PLAYERS_PAGE,
    loadChildren: () =>
      import('./players-board/players-board.module').then(
        (mod) => mod.PlayersBoardModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
