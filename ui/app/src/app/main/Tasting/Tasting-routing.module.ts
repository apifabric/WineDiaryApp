import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TastingHomeComponent } from './home/Tasting-home.component';
import { TastingNewComponent } from './new/Tasting-new.component';
import { TastingDetailComponent } from './detail/Tasting-detail.component';

const routes: Routes = [
  {path: '', component: TastingHomeComponent},
  { path: 'new', component: TastingNewComponent },
  { path: ':id', component: TastingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Tasting-detail-permissions'
      }
    }
  },{
    path: ':tasting_id/TasterTasting', loadChildren: () => import('../TasterTasting/TasterTasting.module').then(m => m.TasterTastingModule),
    data: {
        oPermission: {
            permissionId: 'TasterTasting-detail-permissions'
        }
    }
},{
    path: ':tasting_id/TastingEvent', loadChildren: () => import('../TastingEvent/TastingEvent.module').then(m => m.TastingEventModule),
    data: {
        oPermission: {
            permissionId: 'TastingEvent-detail-permissions'
        }
    }
},{
    path: ':tasting_id/TastingNote', loadChildren: () => import('../TastingNote/TastingNote.module').then(m => m.TastingNoteModule),
    data: {
        oPermission: {
            permissionId: 'TastingNote-detail-permissions'
        }
    }
},{
    path: ':tasting_id/WineTasting', loadChildren: () => import('../WineTasting/WineTasting.module').then(m => m.WineTastingModule),
    data: {
        oPermission: {
            permissionId: 'WineTasting-detail-permissions'
        }
    }
}
];

export const TASTING_MODULE_DECLARATIONS = [
    TastingHomeComponent,
    TastingNewComponent,
    TastingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TastingRoutingModule { }