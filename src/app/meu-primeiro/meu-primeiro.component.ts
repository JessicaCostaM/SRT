import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements OnInit {

  respostasSalvas = [];
  respostasAtual = [];
  respostas1 = ["Teste","Heurísticas","Questionário","Processo de Avaliação", "Não Sei"] 
  respostas2 = ["Mobile","Desktop","Não Sei"]
  // respostas3 = ["Teste","Heurísticas","Questionário","Processo de Avaliação", "Não Sei"] 
  constructor() { }

  ngOnInit() {
    this.respostasAtual = this.respostas1;
  }

  SalvarResposta(resposta: string){
    console.log(resposta);
    this.respostasSalvas.push(resposta);
    this.respostasAtual = this.respostas2;
  }

}
