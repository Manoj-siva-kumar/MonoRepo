import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup-form',
  imports: [CommonModule,RouterOutlet,HttpClientModule, ReactiveFormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css',
})
export class SignupForm {
  
isVisible = true;
toggle() {
  this.isVisible = false;
  this.router.navigate(['/login']); // Absolute path to login component
}
  constructor(private readonly http:HttpClient,private router: Router){}
  
  formBinding = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  PostData(){
    if (this.formBinding.valid){
      this.http.post('http://localhost:3002/api',this.formBinding.value).subscribe({
        next : (response) => {alert('Data is sent to Backend!')},
        error : (err) => {console.error(err); alert('Data is not Transmitted!')}
      });
    }
    else alert('Fill all the Fields!')
  }
  
}
