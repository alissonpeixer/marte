import { AuthService } from './../auth/auth.service';
import { Component, ViewChild } from '@angular/core';
import { RegisterService } from './register.service';
import { NgForm } from '@angular/forms';
import { PoDialogService, PoNotification, PoNotificationService } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  dados = new RegisterService().itemDefaultValue();

  constructor(
    private PoNotificationService: PoNotificationService,
    private authService: AuthService,
    private router: Router
  ){}

  @ViewChild( 'formCadastro' , { static: true }) formCadastro !: NgForm;


  cadastrar(): void{
    if(this.formCadastro.invalid){
      const formLabel = this.formCadastro.form.controls;
      let mensagem: string;
      Object.keys(formLabel).some(key=>{
        let erros = formLabel[key].errors;
        if(erros){
          Object.keys(erros).some(erro => {
            let campo = ''
            //@ts-ignore
            if (document.getElementsByName(key)[0].attributes['p-label']){
              //@ts-ignore
              campo = document.getElementsByName(key)[0].attributes['p-label'].nodeValue
            } else {
              campo = key
            }
            if (erro === 'required'){
              mensagem = `O campo ${campo} é obrigatório e não está preenchido.`;
            }
            return this.PoNotificationService.warning({
              message: mensagem,
              duration: 5000,
            })
          })
        }
      })
    }


    this.authService.singUP(this.dados.username, this.dados.password).then(ret=>{
      if(ret){
        this.PoNotificationService.success('Usuário Criado!');
        this.router.navigate(['/dashboard']);
      } else {
        this.PoNotificationService.error('Erro ao crirar o Usuário!')
      }
    })




  }
}
