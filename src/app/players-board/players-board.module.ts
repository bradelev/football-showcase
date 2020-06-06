import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';

import { MatButtonModule } from '@angular/material/button';

import { PlayersBoardRoutingModule } from './players-board-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlayersBoardComponent } from './players-board.component';
import { PlayersBoardCountryCellRendererComponent } from './cell-renderers/players-board-country-cell-renderer/players-board-country-cell-renderer.component';
import { PlayersBoardClubCellRendererComponent } from './cell-renderers/players-board-club-cell-renderer/players-board-club-cell-renderer.component';
import { PlayersBoardPositionCellRendererComponent } from './cell-renderers/players-board-position-cell-renderer/players-board-position-cell-renderer.component';
import { PositionFieldComponent } from './cell-renderers/players-board-position-cell-renderer/components/position-field/position-field.component';
import { PlayersDetailCellRendererComponent } from './detail-cell-renderers/players-detail-cell-renderer/players-detail-cell-renderer.component';
import { PlayerSkillsComponent } from './detail-cell-renderers/players-detail-cell-renderer/components/player-skills/player-skills.component';


@NgModule({
  declarations: [
    PlayersBoardComponent,
    PlayersBoardCountryCellRendererComponent,
    PlayersBoardClubCellRendererComponent,
    PlayersBoardPositionCellRendererComponent,
    PositionFieldComponent,
    PlayersDetailCellRendererComponent,
    PlayerSkillsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    HighchartsChartModule,
    AgGridModule.withComponents([
      PlayersBoardCountryCellRendererComponent,
      PlayersBoardClubCellRendererComponent,
      PlayersBoardPositionCellRendererComponent,
      PlayersDetailCellRendererComponent
    ]),
    PlayersBoardRoutingModule
  ],
  entryComponents: [
    PlayersBoardClubCellRendererComponent,
    PlayersBoardCountryCellRendererComponent,
    PlayersBoardPositionCellRendererComponent,
    PlayersDetailCellRendererComponent
  ]
})
export class PlayersBoardModule { }
