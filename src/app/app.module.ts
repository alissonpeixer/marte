import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { ClienteCrudComponent } from './cliente/crud/cliente-crud.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { SignupComponent } from './signup/signup.component';
import { UsuariosListaComponent } from './usuarios/lista/usuarios-lista.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent, data: { permissao: [] } },
  { path: 'signup', component: SignupComponent, data: { permissao: [] } },
  {
    path: '',
    component: MainComponent,
    data: { permissao: [] },
    children: [
      {
        path: 'cliente/crud',
        component: ClienteCrudComponent,
        data: { permissao: [] },
      },
      {
        path: 'usuarios/lista',
        component: UsuariosListaComponent,
        data: { permissao: [] },
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MainComponent,
    ClienteCrudComponent,
    SignupComponent,
    UsuariosListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
