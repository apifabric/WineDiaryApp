import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VineyardHomeComponent } from './home/Vineyard-home.component';
import { VineyardNewComponent } from './new/Vineyard-new.component';
import { VineyardDetailComponent } from './detail/Vineyard-detail.component';

const routes: Routes = [
  {path: '', component: VineyardHomeComponent},
  { path: 'new', component: VineyardNewComponent },
  { path: ':id', component: VineyardDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Vineyard-detail-permissions'
      }
    }
  },{
    path: ':vineyard_id/VineyardWine', loadChildren: () => import('../VineyardWine/VineyardWine.module').then(m => m.VineyardWineModule),
    data: {
        oPermission: {
            permissionId: 'VineyardWine-detail-permissions'
        }
    }
},{
    path: ':vineyard_id/Wine', loadChildren: () => import('../Wine/Wine.module').then(m => m.WineModule),
    data: {
        oPermission: {
            permissionId: 'Wine-detail-permissions'
        }
    }
}
];

export const VINEYARD_MODULE_DECLARATIONS = [
    VineyardHomeComponent,
    VineyardNewComponent,
    VineyardDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VineyardRoutingModule { }