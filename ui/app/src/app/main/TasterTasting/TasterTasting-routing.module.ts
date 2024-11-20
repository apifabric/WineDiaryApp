import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasterTastingHomeComponent } from './home/TasterTasting-home.component';
import { TasterTastingNewComponent } from './new/TasterTasting-new.component';
import { TasterTastingDetailComponent } from './detail/TasterTasting-detail.component';

const routes: Routes = [
  {path: '', component: TasterTastingHomeComponent},
  { path: 'new', component: TasterTastingNewComponent },
  { path: ':id', component: TasterTastingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TasterTasting-detail-permissions'
      }
    }
  }
];

export const TASTERTASTING_MODULE_DECLARATIONS = [
    TasterTastingHomeComponent,
    TasterTastingNewComponent,
    TasterTastingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasterTastingRoutingModule { }