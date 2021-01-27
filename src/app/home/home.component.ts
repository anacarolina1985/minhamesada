import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  formulario!: {
    nome: string;
    email: string;
    telefone: string;
    enviarNotificacao: boolean;
    filhos: {
      nome: string;
      idade: number;
      valorMesada: number;
      email: string;
      telefone: string;
      enviarNotificacao: boolean;
    }[];
  };

  formFilho!: {
    nome: string;
    idade: number;
    valorMesada: number;
    email: string;
    telefone: string;
    enviarNotificacao: boolean;
  };

  ngOnInit(): void {
    this.formulario = {
      nome: '',
      email: '',
      telefone: '',
      filhos: [],
      enviarNotificacao: true,
    };

    this.formFilho = {
      nome: '',
      idade: 0,
      valorMesada: 0,
      email: '',
      telefone: '',
      enviarNotificacao: true,
    };
  }

  adicionarFilho(): any {
    this.formulario.filhos.push(this.formFilho);
    this.formFilho = {
      nome: '',
      idade: 0,
      valorMesada: 0,
      email: '',
      telefone: '',
      enviarNotificacao: true,
    };
  }

  enviarForm(): any {
    console.log(this.formulario);
  }
}
