import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DepartamentComponent } from './components/departament/departament.component';
export const routes: Routes = [ 
    {
        path:'',
        component: MainComponent
    },
    {
        path:':id',
        component: DepartamentComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
 ];
