import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="";

  password="";


constructor( private route: Router ){}
  ngOnInit(): void {

  }
  login(){
if(this.username=="Kowshik" && this.password==="1234"){

this.route.navigate(['/home/orders']);
}

      }


}
