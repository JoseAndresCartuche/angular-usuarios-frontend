export interface Departamento {
  id?: number;
  codigo: string;
  nombre: string;
  activo: boolean;
  idUsuarioCreacion: number;
  created_at?: string;
  updated_at?: string;
}