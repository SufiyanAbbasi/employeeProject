import { Routes } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { DesignationComponent } from './components/designation/designation.component';
import { ClientComponent } from './components/client/client.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "role",
        pathMatch: 'full'
    },
    {
        path: 'role',
        component: RolesComponent
    },
    {
        path: 'designation',
        component: DesignationComponent
    },
    {
        path: 'client',
        component: ClientComponent
    }
];
