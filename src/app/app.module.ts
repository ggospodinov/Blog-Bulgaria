import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { ThemeService } from './service/theme.service';
import { ThemeComponent } from './theme/theme/theme.component';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule
   
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }