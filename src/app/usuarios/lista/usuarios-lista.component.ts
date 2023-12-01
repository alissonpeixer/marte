import { PoTableColumn } from '@po-ui/ng-components';
import { ListaService } from './lista.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
})
export class UsuariosListaComponent implements OnInit {
  items: Array<any> = [];

  public readonly columns: Array<PoTableColumn> = [
    { property: 'id', label: 'Cod Usuario' },
    { property: 'userName', label: 'Username' },
    { property: 'displayName', label: 'Nome' },
    { property: 'externalId', label: 'E-mail' },
    { property: 'active', label: 'Ativo', type: 'boolean' },
    { property: 'title', label: 'Cargo' },
  ];

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.listaService.lista().subscribe((ret) => {
      console.log(ret.items);

      this.items = ret.items;
    });
  }

  mostrarDetalhes(): boolean {
    return true;
  }
}
