import { Cargo } from "./cargo.model";
import { Departamento } from "./departamento.model";

export interface User {
  id?: number;
  usuario: string;
  email: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  idCargo?: number;
  idDepartamento?: number;
  departamento?: Departamento;
  cargo?: Cargo;
  created_at?: string;
  updated_at?: string;
}
