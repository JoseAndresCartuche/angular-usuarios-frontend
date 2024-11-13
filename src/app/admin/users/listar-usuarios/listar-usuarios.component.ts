import { Component, OnInit } from '@angular/core';
import { User } from '../../dto/user.model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.sass']
})
export class ListarUsuariosComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
