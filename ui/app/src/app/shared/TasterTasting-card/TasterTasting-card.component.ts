import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TasterTasting-card.component.html',
  styleUrls: ['./TasterTasting-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TasterTasting-card]': 'true'
  }
})

export class TasterTastingCardComponent {


}