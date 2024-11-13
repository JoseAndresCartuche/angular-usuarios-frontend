import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../dto/user.model';
import { UsersService } from 'src/app/services/users.service';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.sass'],
})
export class ListarUsuariosComponent implements OnInit, OnDestroy {
  users: User[] = [];
  isLoading = true;

  subListarUsers!: Subscription;

  displayedColumns: string[] = [
    'usuario',
    'nombres',
    'apellidos',
    'departamento',
    'cargo',
    'acciones',
  ];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(): void {
    this.isLoading = true;
    this.subListarUsers = this.userService
      .listarTodos()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          this.users = response.data;
        },
        error: (error) => {
          this.isLoading = false;
          console.log(error);
        },
      });
  }

  editar(id: number) {}

  eliminar(id: number) {}

  ngOnDestroy(): void {
    if (this.subListarUsers) {
      this.subListarUsers.unsubscribe();
    }
  }
}
