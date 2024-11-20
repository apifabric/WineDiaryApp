import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TastingEvent-new',
  templateUrl: './TastingEvent-new.component.html',
  styleUrls: ['./TastingEvent-new.component.scss']
})
export class TastingEventNewComponent {
  @ViewChild("TastingEventForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}