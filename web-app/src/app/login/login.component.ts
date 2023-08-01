import { Component, OnInit } from '@angular/core';
import { PoDialogService } from '@po-ui/ng-components';
import { PoPageLogin } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exceededAttempts: number = 0;

  constructor(
    private poDialog: PoDialogService
  ){
  }

  ngOnInit() {

  }

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      this.poDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData)
      });
    }
  }

}
