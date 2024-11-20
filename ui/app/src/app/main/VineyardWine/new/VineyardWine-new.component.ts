import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'VineyardWine-new',
  templateUrl: './VineyardWine-new.component.html',
  styleUrls: ['./VineyardWine-new.component.scss']
})
export class VineyardWineNewComponent {
  @ViewChild("VineyardWineForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}