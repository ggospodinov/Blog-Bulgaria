import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
// import { LocalStorage } from '../core/injection-token';
import { IUser } from '../shared/interfaces';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';




 const apiURL = environment.apiURL;

@Injectable()
export class UserService {
  
  user: IUser |null| undefined = undefined

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) { }

  // constructor(
  //   @Inject(LocalStorage) private localStorage : Window['localStorage']) { 
  //   try {
  //     const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
  //     this.user = JSON.parse(localStorageUser);
  //   } catch {
  //     this.user = undefined;
  //   }

  // }

  // login(email: string, password:string): void{
  //   this.user ={
  //     email,
  //     firstName: 'John',
  //     lastName: 'Doe'
  //   }
    
  //   this.localStorage.setItem('<USER>', JSON.stringify(this.user));
  // }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/login`, data, { withCredentials: true }).pipe(
     tap((user) => this.user = user)
   );
   }
      

    register(data: { username: string; email: string; password: string }) {
      return this.http.post<IUser>(`${apiURL}/register`, data, { withCredentials: true }).pipe(
        tap((user) => this.user = user)
      );
    }

    getProfileInfo() {
      return this.http.get<IUser>(`${apiURL}/users/profile`, { withCredentials: true }).pipe(
        tap((user) => this.user = user)
      )
    }

    logout() {
      return this.http.post<IUser>(`${apiURL}/logout`, {}, { withCredentials: true }).pipe(
        tap(() => this.user = null)
      );
    }
    
    updateProfile(data: { username: string; email: string; tel: string; }) {
      return this.http.put<IUser>(`${apiURL}/users/profile`, data, { withCredentials: true }).pipe(
        tap((user) => this.user = user)
      );
    }

  
}
