import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridOptions, AgGridEvent } from 'ag-grid-community';
import { PlayersBoardCountryCellRendererComponent } from './cell-renderers/players-board-country-cell-renderer/players-board-country-cell-renderer.component';
import { PlayersBoardClubCellRendererComponent } from './cell-renderers/players-board-club-cell-renderer/players-board-club-cell-renderer.component';
import { PlayersBoardPositionCellRendererComponent } from './cell-renderers/players-board-position-cell-renderer/players-board-position-cell-renderer.component';
import { PlayersDetailCellRendererComponent } from './detail-cell-renderers/players-detail-cell-renderer/players-detail-cell-renderer.component';
import { PlayersBoardService } from './services/players-board.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players-board',
  templateUrl: './players-board.component.html',
  styleUrls: ['./players-board.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayersBoardComponent implements OnInit {
  gridApi: any;
  rowData$: Observable<any>;
  criteria = '';

  columnDefs = [
    { headerName: 'Name', field: 'Name', cellRenderer: 'agGroupCellRenderer', minWidth: '220' },
    { headerName: 'Age', field: 'Age', maxWidth: '120' },
    { headerName: 'Position', field: 'Position', cellRenderer: 'PositionCellRenderer'},
    { headerName: 'Nationality', field: 'Nationality', cellRenderer: 'CountryCellRenderer', maxWidth: '150'},
    { headerName: 'Club', field: 'Club', cellRenderer: 'ClubCellRenderer'},
    { headerName: 'Value', field: 'Value'},
    { headerName: 'Wage', field: 'Wage', maxWidth: '180'},
    { headerName: 'Overall', field: 'Overall', maxWidth: '150'}
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      suppressMenu: true,
      sortable: true,
    },
    masterDetail: true,
    detailCellRenderer: 'detailPlayerCellRenderer',
    frameworkComponents: {
      CountryCellRenderer: PlayersBoardCountryCellRendererComponent,
      ClubCellRenderer: PlayersBoardClubCellRendererComponent,
      PositionCellRenderer: PlayersBoardPositionCellRendererComponent,
      detailPlayerCellRenderer: PlayersDetailCellRendererComponent
    },
    context: {
      selectCountry: this.onSelectCountry.bind(this),
      selectClub: this.onSelectClub.bind(this),
      selectPosition: this.onSelectPosition.bind(this),
    },
    onRowClicked: (params) => {
      this.gridApi.forEachNode((node) => {
        if (node.childIndex === params.node.childIndex) {
          node.setExpanded(true);
        } else {
          node.setExpanded(false);
        }
      });
    },
  }

  constructor(private playersBoardService: PlayersBoardService) { }

  ngOnInit() {
    this.rowData$ = this.playersBoardService.getAll('players', { _limit: 100 });
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params: AgGridEvent): void {
    this.gridApi = params.api;

    this.gridApi.setSortModel([
      {
        colId: 'Overall',
        sort: 'desc',
      },
    ]);
  }

  onSelectCountry(node): void {
    const { Nationality } = node.rowNode.data;
    this.rowData$ = this.playersBoardService.getAll('players', { Nationality, _limit: 20 })
    this.criteria = ` from ${Nationality}`;
  }

  onSelectClub(node): void {
    const { Club } = node.rowNode.data;
    this.rowData$ = this.playersBoardService.getAll('players', { Club, _limit: 30 });
    this.criteria = ` from ${Club}`;
  }

  onSelectPosition(node): void {
    const { Position } = node.rowNode.data;
    this.rowData$ = this.playersBoardService.getAll('players', { Position, _limit: 30 });
    this.criteria = ` by ${Position}`;
  }

  resetCountries(): void {
    this.rowData$ = this.playersBoardService.getAll('players', { _limit: 100 });
    this.criteria = '';
  }

}
