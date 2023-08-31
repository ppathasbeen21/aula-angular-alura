import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  pensamento = {
    id: '1',
    conteudo: 'Minha Primeira aplicação Angular',
    autoria: 'Dev Patrick',
    modelo: 'modelo2'
  }
  constructor() {
  }
  ngOnInit() {
  }
  criarPensamento() {
    alert('salvo');
  }
  cancelar() {
    alert('cancelado');
  }
}
