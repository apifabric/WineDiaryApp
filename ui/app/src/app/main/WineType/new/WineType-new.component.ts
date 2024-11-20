import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'WineType-new',
  templateUrl: './WineType-new.component.html',
  styleUrls: ['./WineType-new.component.scss']
})
export class WineTypeNewComponent {
  @ViewChild("WineTypeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}