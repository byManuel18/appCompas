import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: [
  ]
})
export class ProveedoresComponent implements OnInit {

  public mensaje:string;
  public proveedores:any;
  public proveedores2:Proveedor[]=[];

  constructor(private proveedoresService:ProveedoresService) {

    this.proveedoresService.getProveedoresBD().subscribe(provees=>{
      provees.forEach((everyprove)=>{
        this.proveedores2.push({
          key:everyprove.key,
          ...everyprove.payload.val() as Proveedor
        });
      });

    });

   }

  ngOnInit(): void {
    
  }

  public Delete(id:string){
    this.proveedores2=[];
    this.proveedoresService.DeleteOfDB(id);
  }

  public setProveedortoUpdate(pre:Proveedor,key:string){
    this.proveedoresService.key=key;
    this.proveedoresService.proveedortoUpdate=pre;
  }

}
