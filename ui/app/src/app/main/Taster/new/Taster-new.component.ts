import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Taster-new',
  templateUrl: './Taster-new.component.html',
  styleUrls: ['./Taster-new.component.scss']
})
export class TasterNewComponent {
  @ViewChild("TasterForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}