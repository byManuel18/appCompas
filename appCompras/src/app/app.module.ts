import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule,OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './proveedores/inicio/inicio.component';
import { HeaderComponent } from './proveedores/header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';;
import { PresupuestosService } from './servicios/presupuestos.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import * as firebase from 'firebase';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { EditproveeComponent } from './proveedores/editprovee/editprovee.component';

firebase.initializeApp(environment.firebaseConfig);

const routes: Routes = [
    { path: 'proveedores', component: ProveedoresComponent,canActivate:
    [GuardService] },
    { path: 'addprovee', component: AddproveeComponent,canActivate:
    [GuardService] },
    { path: 'addpres', component: AddpresComponent,canActivate:
    [GuardService]},
    { path: 'presupuestos', component: PresupuestosComponent,canActivate:
    [GuardService]},
    { path: 'editpres', component: EditpresComponent, canActivate:
    [GuardService] },
    { path: 'editprovee', component:EditproveeComponent,canActivate:
    [GuardService]},
    { path:'registro', component: RegistroComponent},
    { path: 'iniciosesion', component: InisesComponent },
    { path: '', component: InicioComponent },
    { path: '**', component: InicioComponent}
  ];

  @NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    EditproveeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ProveedoresService,PresupuestosService,AutenticacionService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

  ngOnInit () {
    
 }

}
