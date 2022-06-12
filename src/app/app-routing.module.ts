import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppGuard, AuthGuard} from '@app-core';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'getting-started',
    canActivate: [AppGuard],
    loadChildren: () => import('./getting-started/getting-started.module').then(m => m.GettingStartedModule),
  },
  {path: 'app', canLoad: [AuthGuard], loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  {path: '**', redirectTo: 'public'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
