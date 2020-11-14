import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
   private myDBProveedores:AngularFireList<unknown>;
   public proveedortoUpdate:Proveedor;
   public key:string;
    public proveedores: any = [ 
      {
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
      },
      {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
      }
    ]
  constructor(private presSup:AngularFireDatabase) {
    this.myDBProveedores=this.presSup.list("Proveedores");
   }

   public getProveedoresBD(){
     return this.myDBProveedores.snapshotChanges();
   }
   public putProveedor(pres:Proveedor){
    this.myDBProveedores.push(pres);
    }
    public DeleteOfDB(id:string){
      this.myDBProveedores.remove(id);
    }
    public update(prove:Proveedor,id:string){
      this.myDBProveedores.update(id,{...prove});
    }
  getProveedores():string{
    return this.proveedores;
  }


}
