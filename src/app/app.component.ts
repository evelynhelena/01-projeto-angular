import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked {
  title = 'projeto-1';
  contador = 0;

  constructor() {
    console.log('Componente constructor');
  }
  ngAfterContentChecked(): void {
    console.log('Componente ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('Componente ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('Componente ngAfterContentInit');
  }
  ngOnDestroy(): void {
    console.log('Componente ngOnDestroy');
  }
  ngAfterViewInit(): void {
    console.log('Componente ngAfterViewInit');
  }

  ngOnInit(): void {
    console.log('Componente OnInit');
  }
  ngOnChanges(): void {
    console.log('Componente OnChanges');
  }

  ngDoCheck(): void {
    console.log('Componente DoCheck');
  }

  mudarTexto() {
    this.title += "Mudei";
  }

  somaUm() {
    this.contador += 1;
  }

}
