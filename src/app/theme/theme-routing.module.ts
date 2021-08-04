import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';

const routes: Routes = [
    {
        path: 'themes',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: ThemesListComponent
          },
          {
            path: ':themeId',
            component: ThemeComponent
          }
        ]
      },
      {
        path: 'add-theme',
        component: NewThemeComponent,
        canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
        
       
        }
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }