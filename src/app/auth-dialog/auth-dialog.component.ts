import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MaterializeActions } from 'angular2-materialize';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {
  authMode: string;
  modalActions = new EventEmitter<string|MaterializeActions>();

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

}
