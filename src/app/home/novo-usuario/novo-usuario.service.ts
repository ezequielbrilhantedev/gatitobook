import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  apiRoot = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  cadastrarNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post(`${this.apiRoot}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.httpClient.get(`${this.apiRoot}/user/exists/${nomeUsuario}`);
  }
}
