import { Component } from '@angular/core';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public readonly actions: Array<PoPageAction> = [
    {
      label: 'Novo',
      // action: alert("SALVE"),
      // disabled: false,
    },
  ];
}
