import { Component} from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';
import { ImageService } from 'src/app/service/image.service';
import { IPost, ITheme } from 'src/app/shared/interfaces';
import { IImage } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent  {
  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  imageData!: string;

  themes: ITheme[] | undefined;
  AddImages!: IImage | undefined;
  recentPosts: IPost[] | undefined;

  formData :string;
  constructor(
    private themeService: ThemeService,
    private userService: UserService,
    private imageService: ImageService,
    
  ) {
    this.fetchThemes();
    this.fetchRecentPosts();
     this.fetchImages();
     this.formData ="a url to an image"
  }

  

  // form!: FormGroup;

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

  fetchImages(): void {
     this.AddImages = undefined;
      this.imageService.saveImages(1).subscribe(images =>{ this.AddImages = images});
  }

  

}
