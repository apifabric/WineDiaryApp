import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {WINETYPE_MODULE_DECLARATIONS, WineTypeRoutingModule} from  './WineType-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    WineTypeRoutingModule
  ],
  declarations: WINETYPE_MODULE_DECLARATIONS,
  exports: WINETYPE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WineTypeModule { }