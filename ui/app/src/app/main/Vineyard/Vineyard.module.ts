import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {VINEYARD_MODULE_DECLARATIONS, VineyardRoutingModule} from  './Vineyard-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    VineyardRoutingModule
  ],
  declarations: VINEYARD_MODULE_DECLARATIONS,
  exports: VINEYARD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VineyardModule { }