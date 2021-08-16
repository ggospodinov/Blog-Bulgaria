import { Component } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post';
import { ITheme } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent  {
  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  themes: ITheme[] | undefined;
  recentPosts: IPost[] | undefined;

  constructor(
    private themeService: ThemeService,
    private userService: UserService
  ) {
    this.fetchThemes();
    this.fetchRecentPosts();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.themeService.loadThemes().subscribe(themes => this.themes = themes);
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.themeService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }

 
}
