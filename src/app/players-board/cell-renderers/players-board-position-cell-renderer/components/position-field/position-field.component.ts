import { Component, OnInit, Input } from '@angular/core';
import { PositionFieldService } from './../../services/position-field.service';

@Component({
  selector: 'app-position-field',
  templateUrl: './position-field.component.html',
  styleUrls: ['./position-field.component.scss'],
  host: {
    class: 'PositionField-container'
  }
})
export class PositionFieldComponent implements OnInit {
  @Input() position;

  positionKey: string;

  constructor(private positionService: PositionFieldService) { }

  ngOnInit() {
    this.positionKey = this.positionService.getPositionKey(this.position);
  }

}
