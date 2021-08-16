import { Component, OnDestroy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { emailValidator, sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   implements OnDestroy  {

  killSubscription = new Subject();

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
    
    ) {
    this.form =this.fb.group({
       username :['', [Validators.required,Validators.minLength(4)]],
       email: ['',[Validators.required, emailValidator]],
       password: ['', [Validators.required, Validators.minLength(4)]],
       rePassword: ['', [Validators.required, sameValueAsFactory(
        () => this.form?.get('password'), this.killSubscription
      )]],
      // image:['', [Validators.required]] 


    })
   }

  register(): void{
    if (this.form.invalid) { return; }
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    })
      
  }
  
  // onFileSelect(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({ image: file });
  //   const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  //   if (file && allowedMimeTypes.includes(file.type)) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageData = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }
  

}
