import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { Image } from "../../shared/interfaces/images";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ImageService {
  private profiles: Image[] = [];
  private profiles$ = new Subject<Image[]>();
  readonly url = "http://localhost:3000/api/profiles";

  constructor(private http: HttpClient) {}

  getProfiles() {
    this.http
      .get<{ profiles: Image[] }>(this.url)
      .pipe(
        map((profileData) => {
          return profileData.profiles;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
      });
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }

  addProfile(name: string, image: File): void {
    const profileData = new FormData();
    profileData.append("name", name);
    profileData.append("image", image, name);
    this.http
      .post<{ profile: Image }>(this.url, profileData)
      .subscribe((profileData) => {
        const profile: Image = {
          _id: profileData.profile._id,
          name: name,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }
}
