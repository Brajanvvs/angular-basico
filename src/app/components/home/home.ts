import { NgStyle, NgForOf, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, NgForOf, FormsModule, NgClass], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  titulo: string = "Angular Basico";
  activo: boolean = true;

  colorTitulo: string = 'black';

  cambiarColor(color: string) {
    this.colorTitulo = color;
  }

  saludar() {
    console.log("Hola Mundo");
  }

  saludar2() {
    console.log("Hola Mundo");
  }

  producto = {
    imagen: '',
    empresa: '',
    nombre: '',
    precio: '',
    ciudad: ''
  };

  listaProductos: any[] = [];

  agregarProducto() {
    this.listaProductos.push({ ...this.producto });

    this.producto = {
      imagen: '',
      empresa: '',
      nombre: '',
      precio: '',
      ciudad: ''
    };

    alert("Producto agregado correctamente!");
  }


  tema = {
    dificultad: "alta"
  }

  



}
