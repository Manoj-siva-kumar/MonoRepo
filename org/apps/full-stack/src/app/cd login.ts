import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './cd login.html',
  styleUrl: './cd login.css',
})
export class Login {

  firstname: string = '';
  lastname: string = '';
  islogin: boolean = false;
  isValid: boolean = false;
  constructor(private readonly http: HttpClient,
    private router: Router
  ) { }
  getData(Data: string, data: string) {
    this.http.get<any>(`http://localhost:3002/api/login?email=${Data}&password=${data}`).subscribe({
      next: response => {
        this.islogin = response.isValid;
        this.isValid = !response.isValid;
        if (response.isValid) {
          this.firstname = response.firstname;
          this.lastname = response.lastname;
          console.log('Sucessfully Logged in!')
        }
        else console.log('Invalid Email or Password!', response)
      },
      error: err => { console.error(err); alert('No user is Resgistered with this Email!') }
    });

  }
  isVisible = true;
  toggle() {
    this.isVisible = false;
    this.router.navigate(['/signup']); // Absolute path to login component
  }


  formBind = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}
