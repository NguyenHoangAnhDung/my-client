import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private authToken: Angular2TokenService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.authToken.signIn(this.user).subscribe(
      res => {
        console.log(res.json());
        if(res.status == 200) {
          this.onFormResult.emit({signedIn: true, res});
        }
      },
      err => {
        console.log('err', err);
        this.onFormResult.emit({signedIn: false, err});
      }
    );
  }

}
