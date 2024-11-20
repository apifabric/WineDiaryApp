import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineHomeComponent } from './home/Wine-home.component';
import { WineNewComponent } from './new/Wine-new.component';
import { WineDetailComponent } from './detail/Wine-detail.component';

const routes: Routes = [
  {path: '', component: WineHomeComponent},
  { path: 'new', component: WineNewComponent },
  { path: ':id', component: WineDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Wine-detail-permissions'
      }
    }
  },{
    path: ':wine_id/Tasting', loadChildren: () => import('../Tasting/Tasting.module').then(m => m.TastingModule),
    data: {
        oPermission: {
            permissionId: 'Tasting-detail-permissions'
        }
    }
},{
    path: ':wine_id/VineyardWine', loadChildren: () => import('../VineyardWine/VineyardWine.module').then(m => m.VineyardWineModule),
    data: {
        oPermission: {
            permissionId: 'VineyardWine-detail-permissions'
        }
    }
},{
    path: ':wine_id/WineReview', loadChildren: () => import('../WineReview/WineReview.module').then(m => m.WineReviewModule),
    data: {
        oPermission: {
            permissionId: 'WineReview-detail-permissions'
        }
    }
},{
    path: ':wine_id/WineTasting', loadChildren: () => import('../WineTasting/WineTasting.module').then(m => m.WineTastingModule),
    data: {
        oPermission: {
            permissionId: 'WineTasting-detail-permissions'
        }
    }
}
];

export const WINE_MODULE_DECLARATIONS = [
    WineHomeComponent,
    WineNewComponent,
    WineDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }