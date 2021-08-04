import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesComponent } from './themes/themes.component';
import { ThemeService } from '../service/theme.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemesListComponent,
    ThemeComponent,
    ThemesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule
  ],
 
})
export class ThemeModule { }
