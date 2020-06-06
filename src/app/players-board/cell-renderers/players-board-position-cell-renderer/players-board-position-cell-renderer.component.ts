import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-players-board-position-cell-renderer',
  templateUrl: './players-board-position-cell-renderer.component.html',
  styleUrls: ['./players-board-position-cell-renderer.component.scss']
})
export class PlayersBoardPositionCellRendererComponent implements ICellRendererAngularComp {
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
      this.params.context.selectPosition({ rowNode: this.params.node })
    }
  }

}
