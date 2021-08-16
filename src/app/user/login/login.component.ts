import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { emailValidator } from 'src/app/shared/validators';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  // @ViewChild('emailInput', {read: ElementRef}) form!: ElementRef

  emailValidator = emailValidator;

  constructor(
   
     private activatedRoute: ActivatedRoute,
     private userService: UserService,
     private router: Router
    ) { }

    // ngAfterViewInit(): void{
    //   console.log(this.form)
    // }

    // login(form: NgForm): void {
    //      if (form.invalid) { return; }
    //      const { email, password } = form.value;
    //      this.auth.signInWithEmailAndPassword(email, password)
    //      .catch(error=> console.log(error.code))
    //               .then(res=>console.log())
    // }


       login(form: NgForm): void {
       if (form.invalid) { return; }
        const { email, password } = form.value;
        this.userService.login({ email, password }).subscribe({
          next: () => {
            const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/themes';
           this.router.navigate([redirectUrl]);
         },
        error: (err) => {
           console.log(err);
         }
       });
     }



  //  login(form: NgForm): void{
  //    if(form.invalid) {return;}
  //   const {email, password} =form.value
  // this.userService.login(email, password)
  //   const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
  //   this.router.navigate([redirectUrl]);
  // }

  

}
