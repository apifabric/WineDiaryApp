import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './VineyardWine-card.component.html',
  styleUrls: ['./VineyardWine-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.VineyardWine-card]': 'true'
  }
})

export class VineyardWineCardComponent {


}