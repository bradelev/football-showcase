import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CountryListService } from '../../../shared/services/country-list.service'
import { distinctUntilChanged, take } from 'rxjs/operators';

@Component({
  selector: 'app-players-board-country-cell-renderer',
  templateUrl: './players-board-country-cell-renderer.component.html',
  styleUrls: ['./players-board-country-cell-renderer.component.scss']
})
export class PlayersBoardCountryCellRendererComponent implements ICellRendererAngularComp {

  params: ICellRendererParams;
  countryAbbreviation: string;

  constructor(private countryList: CountryListService) {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.getCountryAbbreviation(this.params.value);
  }

  refresh(): boolean {
    return false;
  }

  select(): void {
    if (this.params) {
      this.params.context.selectCountry({ rowNode: this.params.node })
    }
  }

  private getCountryAbbreviation(country: string) {
    this.countryList.getAbbreviation(country)
      .subscribe(abbr => {
        this.countryAbbreviation = abbr ? abbr.toLowerCase() : abbr;
      })
  }


}
