import { PoNotificationService } from '@po-ui/ng-components';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
  PoPageDynamicEditLiterals,
} from '@po-ui/ng-templates';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @ViewChild('formCliente', { static: true }) formCliente!: NgForm;

  public readonly actions: PoPageDynamicEditActions = {
    save: (ret) => this.cadastro(ret),
    saveNew: '/',
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
  };

  fildes: Array<PoDynamicFormField> = [
    {
      property: 'userName',
      label: 'Username',
      key: true,
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
    },
    {
      property: 'password',
      label: 'Senha',
      secret: true,
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
    },
    {
      property: 'displayName',
      label: 'Nome',
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
    },
    {
      property: 'emails',
      label: 'E-mail',
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
    },
  ];

  constructor(
    private poNotificationService: PoNotificationService,
    private cadastroService: SigninService
  ) {}

  cadastro(data: any): void {
    console.log(data);
    const json = {
      userName: data.userName,
      displayName: data.displayName,
      title: '',
      emails: [
        {
          value: data.emails,
          primary: true,
        },
      ],
      active: true,
      groups: [
        {
          value: '*',
        },
      ],
      password: data.password,
      'urn:scim:schemas:extension:enterprise:2.0:User/forceChangePassword':
        true,
      'urn:scim:schemas:extension:enterprise:2.0:User/employeeNumber': '99|01',
      'urn:scim:schemas:extension:enterprise:2.0:User/groupRule': 2,
    };

    this.cadastroService.cadastro(json).subscribe(
      (ret) => {
        console.log(ret);
        this.poNotificationService.success('Cadastrou!');
      },
      (err) => {
        console.log(err);
        this.poNotificationService.error('Erro!');
      }
    );
  }
}
