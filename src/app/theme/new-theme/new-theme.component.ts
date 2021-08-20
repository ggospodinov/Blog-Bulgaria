import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/service/theme.service';
import { Image } from "../../shared/interfaces/images";
// import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent  implements OnInit  {
  form!: FormGroup;
  image!: Image;
  imageData!: string;

  
  constructor(
    private http: HttpClient,
    // private imageServise: ImageService,
    private themeService: ThemeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });
  }

  

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

  onFileSelect(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   const file :File  = (target.files as FileList)[0];
  //   // const file = (e.target as HTMLInputElement).files[0];
  //   this.form.patchValue({ image: file });
  //   const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  //   if (file && allowedMimeTypes.includes(file.type)) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageData = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
   }

  
   ngSubmit() {
    // this.imageServise.addImage(this.form.value.name, this.form.value.image);
    // this.form.reset();
   // this.imageData = null;
  }
 
  
}
