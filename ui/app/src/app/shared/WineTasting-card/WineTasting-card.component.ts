import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './WineTasting-card.component.html',
  styleUrls: ['./WineTasting-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.WineTasting-card]': 'true'
  }
})

export class WineTastingCardComponent {


}