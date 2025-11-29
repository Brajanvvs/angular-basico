import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  imports: [],
  templateUrl: './ciclo-de-vida.html',
  styleUrl: './ciclo-de-vida.css',
})
export class CicloDeVida implements OnInit{

  // ngOnDestroy(): void {
  //   console.log("Se Destruyo el Componente");
  // }

  ngOnInit(): void {
    console.log("Se cargo el componente");
  }

}
