import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TastingNote-card.component.html',
  styleUrls: ['./TastingNote-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TastingNote-card]': 'true'
  }
})

export class TastingNoteCardComponent {


}