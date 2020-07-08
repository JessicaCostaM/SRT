import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-texto',
  templateUrl: './inicio-texto.component.html',
  styleUrls: ['./inicio-texto.component.css']
})
export class InicioTextoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  comecar(){
    this.router.navigateByUrl("/srt/comecar");
  }
  lista(){
    this.router.navigateByUrl("/srt/lista");
  }
}
