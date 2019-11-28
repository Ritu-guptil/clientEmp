import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {DataService} from '../data.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails={
                  uname:"",
                  password:""
              };

  constructor(private service:AuthService,
              private router:Router) 
  { }
message;
SignIn()
{
  let isValid=this.service.Login(this.userDetails);
  if(isValid)
  {
    this.router.navigate(['home']);
  }
  else{
    this.message="Uname/password is incorrect";
  }
}

  ngOnInit() {
  }

}
