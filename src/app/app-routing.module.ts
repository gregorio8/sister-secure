import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'setting-page',
    loadChildren: () => import('./pages/setting-page/setting-page.module').then( m => m.SettingPagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'guardian',
    loadChildren: () => import('./pages/guardian/guardian.module').then( m => m.GuardianPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'police',
    loadChildren: () => import('./pages/police/police.module').then( m => m.PolicePageModule),
    canActivate: [AuthGuard]
  },  
  {
    path: 'add-guardian',
    loadChildren: () => import('./pages/add-guardian/add-guardian.module').then( m => m.AddGuardianPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
