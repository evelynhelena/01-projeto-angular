import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent/* implements
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked */ {

  


  // 4 tipos de data Binding
  // 01 - Interporlação {{title}}

  // Property bind <img [src]="imgUrl">

  // Event biding <button (click)="chamarFuncao()">

  // Two-way databinding <input [(ngModel)]="title"/>

  /* ------------------------------------------------------------------------ */

  // DIRETIVAS
  /* 01 - ngIf usando complemento else, usamos para exibir 
  ou ocultar elementos tomado por decisão logica */

  // 02 ngSwitch 

  // 03 - Diretivas esctruturais

  // *ngFor

  /* ------------------------------------------------------------------------ */

  // Pipes

  /* ---------------------------------------------------------------------------------- */

  /* ngAfterContentChecked(): void {
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
  } */

}
