import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WineType-card.component.html',
  styleUrls: ['./WineType-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WineType-card]': 'true'
  }
})

export class WineTypeCardComponent {


}