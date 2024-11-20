import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TastingEvent-card.component.html',
  styleUrls: ['./TastingEvent-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TastingEvent-card]': 'true'
  }
})

export class TastingEventCardComponent {


}