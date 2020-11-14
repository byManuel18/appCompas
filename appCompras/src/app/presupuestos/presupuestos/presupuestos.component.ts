import { Component, OnInit } from '@angular/core';
import { Presupuesto } from 'src/app/models/Presupuesto';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';


@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = [];
  presupuestoupdate:Presupuesto;
  key:string;
  constructor(private presupuestosService:PresupuestosService) { 
    this.presupuestosService.getPresupuestos().subscribe(presupuestos=>{
      
      presupuestos.forEach((everypresupuesto)=>{
        this.presupuestos.push({
          key:everypresupuesto.key,
          ...everypresupuesto.payload.val() as Presupuesto
        });
        
      })

    });
  }

  ngOnInit(): void {
  }

  setId(presupuesto:Presupuesto,key:string){
    this.presupuestoupdate=presupuesto;
    this.presupuestosService.presupuestoUpdate=presupuesto;
    this.presupuestosService.id=key;
    
  }
  eliminarPresupuesto(key:string){
    this.presupuestos=[];
    this.presupuestosService.deletePredupuesto(key);
  }

}
