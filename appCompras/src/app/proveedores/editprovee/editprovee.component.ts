import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-editprovee',
  templateUrl: './editprovee.component.html',
  styleUrls: ['./editprovee.component.css']
})
export class EditproveeComponent implements OnInit {
  proveedorForm: FormGroup;
  proveedor:Proveedor;
  public provincias:string[]= [
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona',
    'Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
    'La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo',
    'Madrid', 'Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas',
    'Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora','Zaragoza' ];

  constructor(private router: Router,private proveeS:ProveedoresService,private pf: FormBuilder) { 
    this.proveedor=this.proveeS.proveedortoUpdate;
  }

  ngOnInit(): void {

    this.proveedorForm = this.pf.group({
      nombre :['', Validators.required],
      cif:['', Validators.required],
      direccion:['', Validators.required],
      cp:['', Validators.required],
      localidad:['', Validators.required],
      provincia:['', Validators.required],
      telefono:['', Validators.required],
      email:['', Validators.required],
      contacto:['', Validators.required]
      
    });
   

  }
  onSubmit(){
    this.proveeS.update(this.saveProvee(),this.proveeS.key);
    this.router.navigate(['/proveedores']);

  }
  saveProvee():Proveedor{
    const pro:Proveedor={
      key:this.proveedor.key,
      nombre:this.proveedorForm.get('nombre').value,
      cif:this.proveedorForm.get('cif').value,
      direccion:this.proveedorForm.get('direccion').value,
      cp:this.proveedorForm.get('cp').value,
      localidad:this.proveedorForm.get('localidad').value,
      provincia:this.proveedorForm.get('provincia').value,
      telefono:this.proveedorForm.get('telefono').value,
      email:this.proveedorForm.get('email').value,
      contacto:this.proveedorForm.get('contacto').value
    }
    return pro;
  }
}
