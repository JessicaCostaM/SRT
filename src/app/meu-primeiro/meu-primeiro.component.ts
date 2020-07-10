import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements OnInit {

  temResposta = false;
  respostasSalvas = [];
  respostasAtual = [];
  Resultado = [
    {
      nome: "PLAY",
      d1:[1],
      d2:[0,1],
      d3:[3],
      d4:[0],
    },{
      nome: "SG-LOM",
      d1:[1],
      d2:[0,1,2],
      d3:[0],
      d4:[0],
    },{
      nome: "mGBL",
      d1:[1],
      d2:[0],
      d3:[3],
      d4:[1],
    },{
      nome: "PHEG",
      d1:[1],
      d2:[1],
      d3:[3],
      d4:[2],
    },{
      nome: "DEG-7-11 v1",
      d1:[1],
      d2:[1],
      d3:[3],
      d4:[2],
    }
    
  ];
  respostas1 = [
    {
      nome:"Teste",
      valor:0
    },{
      nome:"Heurísticas",
      valor:1
    },{
      nome:"Questionário",
      valor:2
    },{
      nome:"Processo de Avaliação",
      valor:3
    }, {
      nome:"Não Sei",
      valor:4
    }
  ] 
  respostas2 = [
    {
      nome:"Mobile",
      valor:0
    },{
      nome:"Desktop",
      valor:1
    },{
      nome:"Web",
      valor:2
    },{
      nome:"Não Sei",
      valor:3
    }]
  respostas3 = [
    {
      nome:"Especialistas",
      valor:0
    },{
      nome:"Usuário Final",
      valor:1
    },{
      nome:"Professores",
      valor:2
    },{
      nome:"Não Sei",
      valor:3
    }]
  respostas4 = [
    {
      nome:"Estudo de Laboratório",
      valor:0
  },{
    nome:"Estudo de Campo",
    valor:1
  },{
    nome:"Não Sei",
    valor:2
  }]
  TodasRespostas =[this.respostas1,this.respostas2,this.respostas3,this.respostas4]
  // respostas3 = ["Teste","Heurísticas","Questionário","Processo de Avaliação", "Não Sei"] 
  i = 1;

  Tecnicas = [
    {
      nome: "SeGUE",
      d1:[0],
      d2:[0,1,2,3],
      d3:[0],
      d4:[0],
    },
    {
      nome: "Serious Games Usability Testing",
      d1:[0],
      d2:[0,1],
      d3:[3],
      d4:[2],
    },
    {
      nome: "PLAY",
      d1:[1],
      d2:[0,1],
      d3:[3],
      d4:[0],
    },
    {
      nome: "SG-LOM",
      d1:[1],
      d2:[0,1,2],
      d3:[0],
      d4:[0],
    },
    {
      nome: "Wangenheim, C. G. ",
      d1:[2,3],
      d2:[0,1,2,3],
      d3:[0],
      d4:[0],
    },
    {
      nome: "MEEGA+",
      d1:[2,3],
      d2:[0,1],
      d3:[0],
      d4:[2],
    },
    {
      nome: "EGameFlow",
      d1:[4],
      d2:[0,1],
      d3:[0],
      d4:[2],
    },
    {
      nome: "mGBL",
      d1:[1],
      d2:[0],
      d3:[3],
      d4:[1],
    },
    {
      nome: "PHEG",
      d1:[1],
      d2:[1],
      d3:[3],
      d4:[2],
    },
    {
      nome: "UsaECG",
      d1:[1],
      d2:[1],
      d3:[3],
      d4:[2],
    },
  ]
  constructor(public router: Router) { }

  ngOnInit() {
    this.respostasAtual = this.respostas1;
  }

  SalvarResposta(resposta){
    console.log(resposta);
    this.respostasSalvas.push(resposta);
    this.respostasAtual = this.TodasRespostas[this.i];
    this.i++;
    console.log(this.i)
    if(this.i >=5){
      this.computarResposta();
    }
  }

  computarResposta(){
    
    this.Tecnicas.forEach((tec,index) =>{
      if(tec.d1.includes( this.respostasSalvas[0].valor) && tec.d2.includes( this.respostasSalvas[1].valor) && tec.d3.includes( this.respostasSalvas[2].valor) && tec.d4.includes( this.respostasSalvas[3].valor)){
        this.Resultado.push(tec);
      }
    })
    this.temResposta = true;
    console.log(this.Resultado)
  }

  VerTecnica(){
    this.router.navigateByUrl('srt/segue');
  }

}
