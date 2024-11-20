import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TasterTasting-new',
  templateUrl: './TasterTasting-new.component.html',
  styleUrls: ['./TasterTasting-new.component.scss']
})
export class TasterTastingNewComponent {
  @ViewChild("TasterTastingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}