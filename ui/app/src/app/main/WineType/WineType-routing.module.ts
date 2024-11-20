import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineTypeHomeComponent } from './home/WineType-home.component';
import { WineTypeNewComponent } from './new/WineType-new.component';
import { WineTypeDetailComponent } from './detail/WineType-detail.component';

const routes: Routes = [
  {path: '', component: WineTypeHomeComponent},
  { path: 'new', component: WineTypeNewComponent },
  { path: ':id', component: WineTypeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'WineType-detail-permissions'
      }
    }
  }
];

export const WINETYPE_MODULE_DECLARATIONS = [
    WineTypeHomeComponent,
    WineTypeNewComponent,
    WineTypeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineTypeRoutingModule { }