import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm?: FormGroup;
 submitted = false;

  constructor(private auth: AuthentificationService,
              private route: Router) { }

  ngOnInit(): void {

    this.userForm = new FormGroup ({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmationPassword: new FormControl('', Validators.required), 
    })
  }

  ajouterUser(){
    this.submitted = !this.submitted;
    if (this.userForm?.invalid){
      return
    } 
    this.auth.register(this.userForm?.value);
    this.route.navigate(['/Login']);
   }

}
