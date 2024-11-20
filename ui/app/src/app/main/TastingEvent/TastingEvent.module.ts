import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TASTINGEVENT_MODULE_DECLARATIONS, TastingEventRoutingModule} from  './TastingEvent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TastingEventRoutingModule
  ],
  declarations: TASTINGEVENT_MODULE_DECLARATIONS,
  exports: TASTINGEVENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TastingEventModule { }