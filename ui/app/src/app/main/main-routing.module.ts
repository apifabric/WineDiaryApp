import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Event', loadChildren: () => import('./Event/Event.module').then(m => m.EventModule) },
    
        { path: 'Taster', loadChildren: () => import('./Taster/Taster.module').then(m => m.TasterModule) },
    
        { path: 'TasterTasting', loadChildren: () => import('./TasterTasting/TasterTasting.module').then(m => m.TasterTastingModule) },
    
        { path: 'Tasting', loadChildren: () => import('./Tasting/Tasting.module').then(m => m.TastingModule) },
    
        { path: 'TastingEvent', loadChildren: () => import('./TastingEvent/TastingEvent.module').then(m => m.TastingEventModule) },
    
        { path: 'TastingNote', loadChildren: () => import('./TastingNote/TastingNote.module').then(m => m.TastingNoteModule) },
    
        { path: 'Vineyard', loadChildren: () => import('./Vineyard/Vineyard.module').then(m => m.VineyardModule) },
    
        { path: 'VineyardWine', loadChildren: () => import('./VineyardWine/VineyardWine.module').then(m => m.VineyardWineModule) },
    
        { path: 'Wine', loadChildren: () => import('./Wine/Wine.module').then(m => m.WineModule) },
    
        { path: 'WineReview', loadChildren: () => import('./WineReview/WineReview.module').then(m => m.WineReviewModule) },
    
        { path: 'WineTasting', loadChildren: () => import('./WineTasting/WineTasting.module').then(m => m.WineTastingModule) },
    
        { path: 'WineType', loadChildren: () => import('./WineType/WineType.module').then(m => m.WineTypeModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }