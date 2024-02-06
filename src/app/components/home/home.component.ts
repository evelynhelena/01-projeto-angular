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


  clients!: Pessoas;

  displayedColumns: string[] = ['name', 'age', 'gender', 'birthDay', 'salario'];
  dataSource!: MatTableDataSource<Pessoa>;
 
  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.clients);
  }

  constructor() {
    console.log('Componente constructor');
  }



}
