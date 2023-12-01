import { PoNotificationService } from '@po-ui/ng-components';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
  PoPageDynamicEditLiterals,
} from '@po-ui/ng-templates';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css'],
})
export class ClienteCrudComponent {
  public readonly actions: PoPageDynamicEditActions = {
    saveNew: '/',
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
  };

  fildes: Array<PoDynamicFormField> = [
    {
      property: 'CA1NOME',
      label: 'Nome',
      key: true,
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
    },
    {
      property: 'CA1LOJA',
      label: 'Loja',
      secret: true,
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
      type: 'number',
    },
    {
      property: 'CA1NREDUZ',
      label: 'Nome Fantasia',
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
    },
    {
      property: 'CA1TIPO',
      label: 'Tipo',
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
      options: [
        { label: 'Fisica', value: 'F' },
        { label: 'Júridica', value: 'J' },
      ],
    },
    {
      property: 'CA1EST',
      options: [
        { label: 'Fisica', value: 'F' },
        { label: 'Fisica', value: 'FA' },
        { label: 'Fisica', value: 'FV' },
        { label: 'Fisica', value: 'FB' },
        { label: 'Fisica', value: 'FA' },
      ],
      autoUpload: true,
    },
    {
      property: 'CA1END',
      label: 'Endereço',
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
    },
    {
      property: 'CA1MUN',
      label: 'Múnicipio',
      required: true,
      showRequired: true,
      gridMdColumns: 12,
      gridLgColumns: 6,
      params: {},
    },
  ];
}
