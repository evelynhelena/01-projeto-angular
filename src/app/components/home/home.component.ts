import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  clients = [
    {
      name: "Cleiton",
      age: 30,
      gender: 'M',
      birthDay: new Date('10/15/1969'),
      salario:1000
    },
    {
      name: "Maria",
      age: 28,
      gender: 'F',
      birthDay: new Date('08/13/1998'),
      salario: 1500
    },
    {
      name: "Clara",
      age: 21,
      gender: 'F',
      birthDay: new Date('09/12/1933'),
      salario:10200
    }
  ]

  title = 'adasd';
  lampadaApagada = "https://st4.depositphotos.com/27941032/30741/v/450/depositphotos_307416670-stock-illustration-glowing-lightbulb-minimal-line-web.jpg"
  lampadaAcesa = "https://static.vecteezy.com/ti/vetor-gratis/p3/6922207-uma-lampada-queima-em-estilo-plano-um-simbolo-de-novas-ideias-e-comecos-estilo-doodle-isolado-em-um-fundo-branco-color-ilustracaoial-vetor.jpg";
  statusLampada = true;



  constructor() {
    console.log('Componente constructor');
  }

  handleAcender() {
    this.statusLampada = !this.statusLampada;
  }

}
