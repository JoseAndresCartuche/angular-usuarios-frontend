import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departamento } from '../admin/dto/departamento.model';
import { ResponseModel } from '../admin/dto/response.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private apiURL= environment.apiURL + 'users';

  constructor(public http: HttpClient) { }

  public listarTodos() {
    return this.http.get<ResponseModel<Departamento[]>>(this.apiURL);
  }

  public obtenerPorId(id: number) {
    return this.http.get<ResponseModel<Departamento>>(this.apiURL + '/' + id);
  }
}
