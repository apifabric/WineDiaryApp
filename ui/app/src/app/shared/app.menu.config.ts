import { MenuRootItem } from 'ontimize-web-ngx';

import { EventCardComponent } from './Event-card/Event-card.component';

import { TasterCardComponent } from './Taster-card/Taster-card.component';

import { TasterTastingCardComponent } from './TasterTasting-card/TasterTasting-card.component';

import { TastingCardComponent } from './Tasting-card/Tasting-card.component';

import { TastingEventCardComponent } from './TastingEvent-card/TastingEvent-card.component';

import { TastingNoteCardComponent } from './TastingNote-card/TastingNote-card.component';

import { VineyardCardComponent } from './Vineyard-card/Vineyard-card.component';

import { VineyardWineCardComponent } from './VineyardWine-card/VineyardWine-card.component';

import { WineCardComponent } from './Wine-card/Wine-card.component';

import { WineReviewCardComponent } from './WineReview-card/WineReview-card.component';

import { WineTastingCardComponent } from './WineTasting-card/WineTasting-card.component';

import { WineTypeCardComponent } from './WineType-card/WineType-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Event', name: 'EVENT', icon: 'view_list', route: '/main/Event' }
    
        ,{ id: 'Taster', name: 'TASTER', icon: 'view_list', route: '/main/Taster' }
    
        ,{ id: 'TasterTasting', name: 'TASTERTASTING', icon: 'view_list', route: '/main/TasterTasting' }
    
        ,{ id: 'Tasting', name: 'TASTING', icon: 'view_list', route: '/main/Tasting' }
    
        ,{ id: 'TastingEvent', name: 'TASTINGEVENT', icon: 'view_list', route: '/main/TastingEvent' }
    
        ,{ id: 'TastingNote', name: 'TASTINGNOTE', icon: 'view_list', route: '/main/TastingNote' }
    
        ,{ id: 'Vineyard', name: 'VINEYARD', icon: 'view_list', route: '/main/Vineyard' }
    
        ,{ id: 'VineyardWine', name: 'VINEYARDWINE', icon: 'view_list', route: '/main/VineyardWine' }
    
        ,{ id: 'Wine', name: 'WINE', icon: 'view_list', route: '/main/Wine' }
    
        ,{ id: 'WineReview', name: 'WINEREVIEW', icon: 'view_list', route: '/main/WineReview' }
    
        ,{ id: 'WineTasting', name: 'WINETASTING', icon: 'view_list', route: '/main/WineTasting' }
    
        ,{ id: 'WineType', name: 'WINETYPE', icon: 'view_list', route: '/main/WineType' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    EventCardComponent

    ,TasterCardComponent

    ,TasterTastingCardComponent

    ,TastingCardComponent

    ,TastingEventCardComponent

    ,TastingNoteCardComponent

    ,VineyardCardComponent

    ,VineyardWineCardComponent

    ,WineCardComponent

    ,WineReviewCardComponent

    ,WineTastingCardComponent

    ,WineTypeCardComponent

];