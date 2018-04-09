import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {
  authMode: string;
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

  isLoginModel(): boolean {
    return this.authMode == 'login';
  }

  openDialog(mode: string): void {
    this.authMode = mode;
    this.modalActions.emit({action: "modal", params:['open']});
  }

  onLoginFormResult(e): void {
    if(e.signedIn)
      this.closeDialog();
    else
      alert(e.err.json().errors[0]);
  }

  onRegisterFormResult(e): void {
    if(e.signedUp)
      this.closeDialog();
    else {
      alert(e.err.json().errors[0]);
    }
  }

  closeDialog(): void {
    this.modalActions.emit({action: "modal", params:['close']});
  }

}
