import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tecnicas',
  templateUrl: './lista-tecnicas.component.html',
  styleUrls: ['./lista-tecnicas.component.css']
})
export class ListaTecnicasComponent implements OnInit {

  constructor() { }

  Tecnicas = [
    {
      nome: "SeGUE",
      descricao:""
    },
    {
      nome: "Serious Games Usability Testing",
      descricao:""
    },
    {
      nome: "PLAY",
      descricao:""
    },
    {
      nome: "SG-LOM",
      descricao:""
    },
    {
      nome: "Wangenheim, C. G. ",
      descricao:""
    },
    {
      nome: "MEEGA+",
      descricao:""
    },
    {
      nome: "EGameFlow",
      descricao:""
    },
    {
      nome: "mGBL",
      descricao:""
    },
    {
      nome: "PHEG",
      descricao:""
    },
    {
      nome: "UsaECG",
      descricao:""
    },
    {
      nome: "Gladcheff, Ana Paula",
      descricao:""
    },
    {
      nome: "Savi, Rafael",
      descricao:""
    },
    
  ]
  ngOnInit() {
    this.Tecnicas.sort(function (a, b) {
      var textA = a.nome.toUpperCase();
      var textB = b.nome.toUpperCase();
    
      return textA.localeCompare(textB);
    });
  }

}
