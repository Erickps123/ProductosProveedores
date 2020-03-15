import { Component } from '@angular/core';


import {Proveedor} from './models/proveedor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  proveedorArray: Proveedor[]=[
    {id:1, nombre: "Erick", direccion:"Estrelleta", telefono:"849-406-8604"}
  ];
  ProveedorSeleccionado: Proveedor = new Proveedor();

  Enviar(){

    if(this.ProveedorSeleccionado.id===0){
      
        this.ProveedorSeleccionado.id= this.proveedorArray.length+1;
        this.proveedorArray.push(this.ProveedorSeleccionado);
    }
   
    this.ProveedorSeleccionado= new Proveedor();
  }
  Editar(proveedor: Proveedor){
    this.ProveedorSeleccionado= proveedor;
  }
  Eliminar(){
    if(confirm("Quieres Eliminarlo?")){
      this.proveedorArray= this.proveedorArray.filter(x=> x != this.ProveedorSeleccionado);
    this.ProveedorSeleccionado= new Proveedor();
    }
  }
}
