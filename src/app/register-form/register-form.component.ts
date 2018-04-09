import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @Output() onFormResult = new EventEmitter<any>();
  constructor(private authToken: Angular2TokenService) { }

  ngOnInit() {
  }

  user = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  onRegisterSubmit(): void {
    console.log(this.user);
    this.authToken.registerAccount(this.user).subscribe(
      res => {
        if(res.status == 200)
          this.onFormResult.emit({ signedUp: true, res });
      },
      err => {
        this.onFormResult.emit({ signedUp: false, err });
      }
    );
  }
}
