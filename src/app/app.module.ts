import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { ThemeService } from './service/theme.service';
import { ThemeComponent } from './theme/theme/theme.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
   
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }