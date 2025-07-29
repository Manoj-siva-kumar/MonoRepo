import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupForm } from './signup-form';

@Component({
  imports: [RouterModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {

  isVisible = true;
  toggle = () => this.isVisible=!this.isVisible;
  constructor(private readonly http:HttpClient){}
  
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
