import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from "./properties/properties.component";
import { SchoolsComponent } from "./schools/schools.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/properties', pathMatch: 'full' },
    { path: 'properties', component: PropertiesComponent },
    { path: 'schools', component: SchoolsComponent } 
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
