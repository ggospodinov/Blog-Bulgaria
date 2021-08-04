import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent  {

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) { }

  createTheme(form: NgForm): void {
    if (form.invalid) { return; }
    this.themeService.saveTheme(form.value).subscribe({
      next: () => {
        this.router.navigate(['/themes']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  
}
