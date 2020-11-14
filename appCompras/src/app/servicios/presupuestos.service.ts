import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Presupuesto } from '../models/Presupuesto';


@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  private myDB$:AngularFireList<unknown>;
  presupuestoUpdate:Presupuesto;
  id:string;
  constructor(private presSup:AngularFireDatabase) { 
    this.myDB$=this.presSup.list("Presupuestos");
  }

  public postPresupuesto(presupuesto:any){
    
   this.myDB$.push(presupuesto);
  }

  public getPresupuestos(){
    return this.myDB$.snapshotChanges();
  }
  public getPresupuesto(id$:string):any{
    return this.presSup.list('myDB',ref =>
    ref.ref
    );
  }

  public putPresupuesto(presupuesto:Presupuesto,id:string){
   this.myDB$.update(id,{...presupuesto});
  }

  public deletePredupuesto(key:string){
    this.myDB$.remove(key);
  }
  
}
