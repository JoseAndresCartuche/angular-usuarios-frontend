import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cargo } from '../admin/dto/cargo.model';
import { ResponseModel } from '../admin/dto/response.model';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  private apiURL= environment.apiURL + 'users';

  constructor(public http: HttpClient) { }

  public listarTodos() {
    return this.http.get<ResponseModel<Cargo[]>>(this.apiURL);
  }

  public obtenerPorId(id: number) {
    return this.http.get<ResponseModel<Cargo>>(this.apiURL + '/' + id);
  }
}
