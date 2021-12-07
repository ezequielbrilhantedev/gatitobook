import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private tokenService: TokenService) {}

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
  }
}
