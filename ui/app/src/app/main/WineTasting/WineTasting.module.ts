import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WINETASTING_MODULE_DECLARATIONS, WineTastingRoutingModule} from  './WineTasting-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WineTastingRoutingModule
  ],
  declarations: WINETASTING_MODULE_DECLARATIONS,
  exports: WINETASTING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WineTastingModule { }