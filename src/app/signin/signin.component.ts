import { SigninService } from './signin.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import {
  PoNotificationModule,
  PoNotificationService,
} from '@po-ui/ng-components';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  loading: boolean = false;

  constructor(
    private siginService: SigninService,
    private poNotification: PoNotificationService
  ) {}

  login({ login, password }: { login: string; password: string }) {
    this.loading = true;

    this.siginService.login(login, password).subscribe(
      (ret) => {
        console.log(ret);
        this.poNotification.success('Usuário logado!');
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }
}
