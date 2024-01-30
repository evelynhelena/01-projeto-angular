import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Pessoa{
  name: string;
  age: number;
  gender: string;
  birthDay: Date;
  salario: number;
}

export interface Pessoas extends Array<Pessoa>{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {


  clients: Pessoas = [
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
  ];

  displayedColumns: string[] = ['name', 'age', 'gender', 'birthDay', 'salario'];
  dataSource!: MatTableDataSource<Pessoa>;
 
  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.clients);
  }

  constructor() {
    console.log('Componente constructor');
  }



}
