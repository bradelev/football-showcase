import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-players-board-club-cell-renderer',
  templateUrl: './players-board-club-cell-renderer.component.html',
  styleUrls: ['./players-board-club-cell-renderer.component.scss']
})
export class PlayersBoardClubCellRendererComponent implements ICellRendererAngularComp {
  params: ICellRendererParams;

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  select(): void {
    if (this.params) {
      this.params.context.selectClub({ rowNode: this.params.node })
    }
  }

}
