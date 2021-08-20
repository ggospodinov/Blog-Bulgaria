import { Component} from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';
import { IPost, ITheme,Image } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent  {
  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  themes: ITheme[] | undefined;
  images: Image[] | undefined
  recentPosts: IPost[] | undefined;

  constructor(
    private themeService: ThemeService,
    private userService: UserService
  ) {
    this.fetchThemes();
    this.fetchRecentPosts();
  }

  totalLength:any
  page:number=1

  fetchThemes(): void {
    this.themes = undefined;
    this.themeService.loadThemes().subscribe(themes =>{ this.themes = themes
      //  this.totalLength=themes.length
      //  console.log(this.themes)
      });
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.themeService.loadPosts(3).subscribe(posts => this.recentPosts = posts);
  }

  

}
