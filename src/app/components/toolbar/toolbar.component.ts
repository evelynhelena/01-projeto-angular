import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  title = 'Projeto 1'

  routes = [ 
    { path: 'home', name: 'Home'},
    { path: 'novo', name: 'Novo'},
    { path: 'produto', name: 'Produto'},
  ]

}
