import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private UserService: UserService) { }

  login(email: string, password: string): void{
      this.UserService.login(email, password)
  }

  

}
