import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ListarUsuariosComponent,
    FormularioUsuariosComponent,
    UsersComponent,
  ],
  imports: [CommonModule, MatToolbarModule, MatCardModule, UsersRoutingModule],
})
export class UsersModule {}
