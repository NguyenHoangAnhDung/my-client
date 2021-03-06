import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public authToken: Angular2TokenService) { }

  ngOnInit() {
  }

  presentAuthDialog(mode: string = 'login'): void {
    this.authDialog.openDialog(mode);
  }

}
