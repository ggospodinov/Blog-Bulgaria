import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import * as environment  from 'src/environments/environment'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  // title = 'Travel-Blog-Bulgaria';

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }
  
  constructor(private  userService : UserService)
  {
     this.userService.getProfileInfo().subscribe({
    error: () => {
      this.userService.user = null;
    }
  })
}
}
