import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VineyardWineHomeComponent } from './home/VineyardWine-home.component';
import { VineyardWineNewComponent } from './new/VineyardWine-new.component';
import { VineyardWineDetailComponent } from './detail/VineyardWine-detail.component';

const routes: Routes = [
  {path: '', component: VineyardWineHomeComponent},
  { path: 'new', component: VineyardWineNewComponent },
  { path: ':id', component: VineyardWineDetailComponent,
    data: {
      oPermission: {
        permissionId: 'VineyardWine-detail-permissions'
      }
    }
  }
];

export const VINEYARDWINE_MODULE_DECLARATIONS = [
    VineyardWineHomeComponent,
    VineyardWineNewComponent,
    VineyardWineDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VineyardWineRoutingModule { }