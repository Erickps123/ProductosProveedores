import { Component, OnInit } from '@angular/core';

import {Productos} from './producto.model'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productoArray: Productos[]=[
     {id:1, nombre: "Dove", descripcion:"Crema", fecha_vencimiento:"28/12/2020", id_proveedor: 1}
    ];
    ProductoSeleccionado: Productos = new Productos();
    Enviar(){

      if(this.ProductoSeleccionado.id===0){
        
          this.ProductoSeleccionado.id= this.productoArray.length+1;
          this.productoArray.push(this.ProductoSeleccionado);
      }
     
      this.ProductoSeleccionado= new Productos();
    }
    Editar(producto: Productos){
      this.ProductoSeleccionado= producto;
    }
    Eliminar(){
      if(confirm("Quieres Eliminarlo?")){
        this.productoArray= this.productoArray.filter(x=> x != this.ProductoSeleccionado);
      this.ProductoSeleccionado= new Productos();
      }
    }


  constructor() { }

  ngOnInit(): void {
  }

}
