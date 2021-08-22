import { HttpClient } from '@angular/common/http';
import { Component, ViewChild,ElementRef} from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import{IImage} from './../../shared/interfaces/images';



import { ImageService } from 'src/app/service/image.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-allimages',
  templateUrl: './allimages.component.html',
  styleUrls: ['./allimages.component.css']
})
export class AllimagesComponent  {

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

//   afuConfig = {
//     uploadAPI: {
//       url:"http://localhost:3000/api/images"
//     }
// };

  // form!: FormGroup;
  // image!: IImage;
  // imageData!: string;

   constructor(
     private http: HttpClient
      // private imageService: ImageService
      ) { }

      onFileUpload(){
        const imageBlob = this.fileInput.nativeElement.files[0];
        const file= new FormData();
        file.set('file', imageBlob)
        // mongodb://localhost:27017/forum'

        this.http.post('http://localhost:3000/', file).subscribe(response=>{
          console.log(response)
        })
      }

  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     name: new FormControl(null),
  //     image: new FormControl(null),
  //   });
  // }

  // onFileSelect(event: Event) {
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
  //  }

  
  //  onSubmit() {
  //    this.imageService.addImage(this.form.value.name, this.form.value.image);
  //    this.form.reset();
 
  // }



}
