import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesComponent } from './themes/themes.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ThemeService } from '../service/theme.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateimageComponent } from './createimage/createimage.component';
import { AllimagesComponent } from './allimages/allimages.component';





@NgModule({
  declarations: [
    NewThemeComponent,
    ThemesListComponent,
    ThemeComponent,
    ThemesComponent,
    CreateimageComponent,
    AllimagesComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
 
})
export class ThemeModule { }
