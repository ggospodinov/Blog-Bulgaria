import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { ThemeService } from './service/theme.service';
import { ImageService } from './service/profile/profile-service.service';
import { ThemeModule } from './theme/theme.module';

import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
   
  
  ],
  imports: [
      BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    ThemeModule,
    
   
  ],
  providers: [
    ThemeService,
    ImageService
  ],

  
  bootstrap: [AppComponent]
})
export class AppModule { }