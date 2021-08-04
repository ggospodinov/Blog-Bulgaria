import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';

import { ITheme } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent  {

  
  theme: ITheme | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private  ThemeService: ThemeService
  )
  
  {
    // this.fetchTheme();
  }

  // fetchTheme(): void {
  //   this.theme = undefined;
  //   const id = this.activatedRoute.snapshot.params.themeId;
  //   this.ThemeService.loadTheme(id).subscribe(theme => this.theme = theme);
  // }

 
}
