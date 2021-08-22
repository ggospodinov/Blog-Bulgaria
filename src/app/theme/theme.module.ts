import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { ThemeService } from '../service/theme.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllimagesComponent } from './allimages/allimages.component';
import { AngularFileUploaderModule } from "angular-file-uploader";





@NgModule({
  declarations: [
    NewThemeComponent,
    ThemesListComponent,
    ThemeComponent,
    AllimagesComponent
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AngularFileUploaderModule
  ],
 
})
export class ThemeModule { }
