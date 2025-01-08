import { Routes } from '@angular/router';
import { AuthenticationGuard } from '../app/guards/authentication.guards';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },
    {
        path: 'player',
        loadChildren: () => import('./page/player/player.module').then(x => x.PlayerModule),
        canLoad: [AuthenticationGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./page/login/login.module').then(x => x.LoginModule)
    }
];
