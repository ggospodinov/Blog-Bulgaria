import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        
       
        }
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }