import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

import { IImage } from "../shared/interfaces/images";
import { Subject } from "rxjs";

const API_URL = environment.apiURL

@Injectable()
 export class ImageService {

   

  private images: IImage[] = [];
  private images$ = new Subject<IImage[]>();
   readonly url = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }


  getImages() {
    this.http
      .get<{ images: IImage[] }>(this.url)
      .pipe(
        map((imageData) => {
          return imageData.images;
        })
      )
      .subscribe((images) => {
        this.images = images;
        this.images$.next(this.images);
      });
  }

  getImageStream() {
    return this.images$.asObservable();
  }




  addImage(name: string, image: File): void {
    const profileData = new FormData();
    profileData.append("name", name);
    profileData.append("image", image, name);
    this.http
      .post<{ image: IImage }>(this.url, profileData)
      .subscribe((imageData) => {
        const image: IImage = {
          _id: imageData.image._id,
          name: name,
          imagePath: imageData.image.imagePath,
        };
        this.images.push(image);
        this.images$.next(this.images);
      });
  }


// saveImages() {
//  return this.http.post<IImage>(`${API_URL}/images`, { withCredentials: true });
// }
  saveImages(data: any) {
  return this.http.post<IImage>(`${API_URL}/images`, data, { withCredentials: true });
  
}

  
 }
