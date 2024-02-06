import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProps } from './type';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // Injeção de dependencias
  constructor(private http: HttpClient) {}

  getCityOfCep(cep: string){
     return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

  getUser(userName: string){
    return  this.http.get<UserProps>(`https://api.github.com/users/${userName}`);
  }

}
