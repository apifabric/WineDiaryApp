import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TastingEventHomeComponent } from './home/TastingEvent-home.component';
import { TastingEventNewComponent } from './new/TastingEvent-new.component';
import { TastingEventDetailComponent } from './detail/TastingEvent-detail.component';

const routes: Routes = [
  {path: '', component: TastingEventHomeComponent},
  { path: 'new', component: TastingEventNewComponent },
  { path: ':id', component: TastingEventDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TastingEvent-detail-permissions'
      }
    }
  }
];

export const TASTINGEVENT_MODULE_DECLARATIONS = [
    TastingEventHomeComponent,
    TastingEventNewComponent,
    TastingEventDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TastingEventRoutingModule { }