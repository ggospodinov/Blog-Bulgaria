import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { ThemeService } from './service/theme.service';
import { ImageService } from './service/image.service';
import { ThemeModule } from './theme/theme.module';

import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    
   
  
  ],
  imports: [
      BrowserModule,
      UserModule,
      ThemeModule,
      CoreModule,
      HttpClientModule,
      AppRoutingModule,
      
    
   
  ],
  providers: [
    ThemeService,
     ImageService
  ],

  
  bootstrap: [AppComponent]
})
export class AppModule { }