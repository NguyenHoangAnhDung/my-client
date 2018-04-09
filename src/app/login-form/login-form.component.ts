import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() onFormResult = new EventEmitter<any>();
  constructor(private authToken: Angular2TokenService) { }

  ngOnInit() {
  }

  user = {
    email: '',
    password: ''
  };

  onLoginSubmit(): void {
    this.authToken.signIn(this.user).subscribe(
      res => {
        if(res.status == 200)
          this.onFormResult.emit({ signedIn: true, res });
      },
      err => {
        this.onFormResult.emit({ signedIn: false, err });
      }
    );
  }

}
