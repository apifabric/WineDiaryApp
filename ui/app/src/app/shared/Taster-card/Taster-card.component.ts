import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Taster-card.component.html',
  styleUrls: ['./Taster-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Taster-card]': 'true'
  }
})

export class TasterCardComponent {


}