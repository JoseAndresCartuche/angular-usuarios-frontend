import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../admin/dto/response.model';
import { User } from '../admin/dto/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL= environment.apiURL + 'users';

  constructor(public http: HttpClient) { }

  public listarTodos(): Observable<ResponseModel<User[]>> {
    return this.http.get<ResponseModel<User[]>>(this.apiURL);
  }

  public obtenerPorId(id: number): Observable<ResponseModel<User>> {
    return this.http.get<ResponseModel<User>>(this.apiURL + '/' + id);
  }

  public crear(user: User) {
    return this.http.post<ResponseModel<User>>(this.apiURL, user);
  };

  public actualizar(user: User): Observable<ResponseModel<User>> {
    return this.http.put<ResponseModel<User>>(this.apiURL, user);
  };

  public eliminar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.apiURL + '/' + id);
  }
}
