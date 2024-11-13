export interface User {
  id?: number;
  usuario: string;
  email: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  idCargo: number;
  idDepartamento: number;
  created_at?: string;
  updated_at?: string;
}
