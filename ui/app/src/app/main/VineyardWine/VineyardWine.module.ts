import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {VINEYARDWINE_MODULE_DECLARATIONS, VineyardWineRoutingModule} from  './VineyardWine-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    VineyardWineRoutingModule
  ],
  declarations: VINEYARDWINE_MODULE_DECLARATIONS,
  exports: VINEYARDWINE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VineyardWineModule { }