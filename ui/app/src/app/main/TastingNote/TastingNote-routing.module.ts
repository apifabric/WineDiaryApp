import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TastingNoteHomeComponent } from './home/TastingNote-home.component';
import { TastingNoteNewComponent } from './new/TastingNote-new.component';
import { TastingNoteDetailComponent } from './detail/TastingNote-detail.component';

const routes: Routes = [
  {path: '', component: TastingNoteHomeComponent},
  { path: 'new', component: TastingNoteNewComponent },
  { path: ':id', component: TastingNoteDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TastingNote-detail-permissions'
      }
    }
  }
];

export const TASTINGNOTE_MODULE_DECLARATIONS = [
    TastingNoteHomeComponent,
    TastingNoteNewComponent,
    TastingNoteDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TastingNoteRoutingModule { }