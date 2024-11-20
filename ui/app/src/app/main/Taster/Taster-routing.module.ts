import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasterHomeComponent } from './home/Taster-home.component';
import { TasterNewComponent } from './new/Taster-new.component';
import { TasterDetailComponent } from './detail/Taster-detail.component';

const routes: Routes = [
  {path: '', component: TasterHomeComponent},
  { path: 'new', component: TasterNewComponent },
  { path: ':id', component: TasterDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Taster-detail-permissions'
      }
    }
  },{
    path: ':taster_id/TasterTasting', loadChildren: () => import('../TasterTasting/TasterTasting.module').then(m => m.TasterTastingModule),
    data: {
        oPermission: {
            permissionId: 'TasterTasting-detail-permissions'
        }
    }
},{
    path: ':taster_id/WineReview', loadChildren: () => import('../WineReview/WineReview.module').then(m => m.WineReviewModule),
    data: {
        oPermission: {
            permissionId: 'WineReview-detail-permissions'
        }
    }
}
];

export const TASTER_MODULE_DECLARATIONS = [
    TasterHomeComponent,
    TasterNewComponent,
    TasterDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasterRoutingModule { }