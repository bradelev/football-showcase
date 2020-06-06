import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-players-detail-cell-renderer',
  templateUrl: './players-detail-cell-renderer.component.html',
  styleUrls: ['./players-detail-cell-renderer.component.scss']
})
export class PlayersDetailCellRendererComponent implements ICellRendererAngularComp {
  params: ICellRendererParams;
  imgStr = '';

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.imgStr = this.params.data.Photo;
  }

  setDefaultPic() {
    this.imgStr = "https://nunku.org.au/wp-content/uploads/mp/image-cache/site/0/profile-icon.2e46805ba64bb3d20b8aaa43fd0a109b.png";
  }

  refresh(): boolean {
    return false;
  }


}
