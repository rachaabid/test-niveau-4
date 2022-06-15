import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  email: any;
  password: any;
  Login: Login = new Login();

  constructor(private router: Router) { }

  login(){
    let users = JSON.parse(localStorage.getItem('users')||'[]');
    let userFound = users.find((user: any) => user[this.email] == this.email && user[this.password] == this.password); 
    if (userFound != undefined){
      localStorage.setItem('connectedUser',JSON.stringify(userFound));
      this.router.navigateByUrl('/Home');
    }
    else {
    alert('E-mail ou mot de passe est incorrect')
    }
 }

 register(data: any){
    let users = JSON.parse(localStorage.getItem('users')||'[]');
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  }

}
