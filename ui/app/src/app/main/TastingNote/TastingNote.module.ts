import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TASTINGNOTE_MODULE_DECLARATIONS, TastingNoteRoutingModule} from  './TastingNote-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TastingNoteRoutingModule
  ],
  declarations: TASTINGNOTE_MODULE_DECLARATIONS,
  exports: TASTINGNOTE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TastingNoteModule { }