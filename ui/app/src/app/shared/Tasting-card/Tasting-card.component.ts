import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Tasting-card.component.html',
  styleUrls: ['./Tasting-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Tasting-card]': 'true'
  }
})

export class TastingCardComponent {


}