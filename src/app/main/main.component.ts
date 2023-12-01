import { Component } from '@angular/core';
import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  menus: Array<PoMenuItem> = [
    {
      label: 'Cliente',
      icon: 'po-icon-user',
      shortLabel: 'Register',
      subItems: [{ label: 'Resgistrar ', link: '/cliente/crud' }],
    },
    {
      label: 'Usuários',
      icon: 'po-icon-user',
      shortLabel: 'Register',
      subItems: [{ label: 'Lista ', link: '/usuarios/lista' }],
    },
  ];

  actions: Array<PoToolbarAction>;

  constructor() {
    this.actions = [{ label: 'Selecione' }];
  }
}
