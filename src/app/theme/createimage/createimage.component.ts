import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


import { ImageService } from "../../service/profile/profile-service.service";
import {Image} from '../../shared/interfaces/images'

@Component({
  selector: 'app-createimage',
  templateUrl: './createimage.component.html',
  styleUrls: ['./createimage.component.css']
})
export class CreateimageComponent implements OnInit {
  form!: FormGroup;
  profile!: Image;
  imageData!: string;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
    });
  }
  onFileSelect(event: Event) {
    const target= event.target as HTMLInputElement;
    let file = (target.files as FileList)[0];
     this.form.patchValue({ image: file });
     const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
     if (file && allowedMimeTypes.includes(file.type)) {
       const reader = new FileReader();
      reader.onload = () => {
       this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
     }
    console.log('fale selected')
  }

  onSubmit() {
    //  this.imageService.addProfile(this.form.value.name, this.form.value.image);
    // this.form.reset();
    // this.imageData = null ;
    console.log('submit image')
  }

}
