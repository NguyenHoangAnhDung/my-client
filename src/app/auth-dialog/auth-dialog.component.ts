import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MateralizeAction } from 'angular2-materialize';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {
  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalActions = new EventEmitter<string | MateralizeAction>();

  constructor() { }

  ngOnInit() {
  }

  openDialog(mode: 'login' | 'register' = 'login'): void {
    this.authMode = mode;
    this.modalActions.emit({ action: "modal", params:['open'] });
  }

  isLoginMode(): boolean { return this.authMode == 'login' }
  isRegisterMode(): boolean { return this.authMode == 'register' }
}
