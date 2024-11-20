import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Vineyard-card.component.html',
  styleUrls: ['./Vineyard-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Vineyard-card]': 'true'
  }
})

export class VineyardCardComponent {


}