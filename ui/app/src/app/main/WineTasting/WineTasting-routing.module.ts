import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineTastingHomeComponent } from './home/WineTasting-home.component';
import { WineTastingNewComponent } from './new/WineTasting-new.component';
import { WineTastingDetailComponent } from './detail/WineTasting-detail.component';

const routes: Routes = [
  {path: '', component: WineTastingHomeComponent},
  { path: 'new', component: WineTastingNewComponent },
  { path: ':id', component: WineTastingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WineTasting-detail-permissions'
      }
    }
  }
];

export const WINETASTING_MODULE_DECLARATIONS = [
    WineTastingHomeComponent,
    WineTastingNewComponent,
    WineTastingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineTastingRoutingModule { }