import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Image } from "../shared/interfaces/images";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
 export class ImageService {

//   private images: Image[] = [];
//   private images$ = new Subject<Image[]>();
//    readonly url = "http://localhost:3000/api/";

//   constructor(private http: HttpClient) { }


//   getImages() {
//     this.http
//       .get<{ profiles: Image[] }>(this.url)
//       .pipe(
//         map((profileData) => {
//           return profileData.profiles;
//         })
//       )
//       .subscribe((profiles) => {
//         this.images = profiles;
//         this.images$.next(this.images);
//       });
//   }

//   getImageStream() {
//     return this.images$.asObservable();
//   }




//   addImage(name: string, image: File): void {
//     const profileData = new FormData();
//     profileData.append("name", name);
//     profileData.append("image", image, name);
//     this.http
//       .post<{ profile: Image }>(this.url, profileData)
//       .subscribe((profileData) => {
//         const profile: Image = {
//           _id: profileData.profile._id,
//           name: name,
//           imagePath: profileData.profile.imagePath,
//         };
//         this.images.push(profile);
//         this.images$.next(this.images);
//       });
//   }
 }
