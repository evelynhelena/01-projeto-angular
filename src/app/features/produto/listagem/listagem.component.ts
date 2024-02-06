import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  constructor(private produtoService: ProdutoService){}

  UserName = '';

  getCep(){
    return this.produtoService.getCityOfCep('06835510').subscribe(resposta =>  {
      console.log(resposta);
     });
  }

  getUser(){
    return this.produtoService.getUser('evelynhelena').subscribe(user => {
      this.UserName = user.name;
      console.log(user.name);
    })
  }

  ngOnInit(): void {
    this.getCep();
    this.getUser();
  }
}
