import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { PoDialogService } from '@po-ui/ng-components';
import { PoPageLogin } from '@po-ui/ng-templates';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exceededAttempts: number = 0;

  constructor(
    private poDialog: PoDialogService,
    private authService: AuthService,
    private router: Router
  ){
  }

  ngOnInit() {}

  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
      this.authService.login(formData.login,formData.password).then((res: boolean)=> {
        if (res) {
          this.router.navigate(['/dashboard']);
        } else {
          this.poDialog.alert({
            title: 'Erro',
            message: "Login mal sucedido!"
          });
        }
      })
    }
  }

}
