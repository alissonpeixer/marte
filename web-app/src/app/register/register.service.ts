interface PropsLogin  {
  nome: string;
  sobrenome:  string;
  username: string;
  email: string,
  password: string,
}

export class RegisterService {
  constructor(){}

  itemDefaultValue(): PropsLogin{
    return {
      email: '',
      nome: '',
      password: '',
      sobrenome: '',
      username: ''
    }
  }
}
