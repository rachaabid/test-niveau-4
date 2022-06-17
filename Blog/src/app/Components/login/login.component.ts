import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm?: FormGroup;
  submitted = false;

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup ({
     
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required) 
    })
  }

  onLogin(){
    this.submitted = true;
    if (this.userForm?.invalid){
      return
    } 
    this.auth.login();
  }

}
