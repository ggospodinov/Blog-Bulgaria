import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { FullComponent } from './full/full.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    FullComponent,
  
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    
    
  ],

  exports:[
    HeaderComponent,
    FooterComponent,
    LandingComponent,
       
    
    
  ]
})
export class CoreModule { }
