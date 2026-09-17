import { Medico } from "./medico";
import { StatusConsulta } from "../types/StatusConsulta";
import { Paciente } from "../types/paciente";


export interface Consulta {
    id: number;
    medico: Medico;
    paciente: Paciente;
    data: Date;
    valor: number;
    status: StatusConsulta;
    observacoes?: string;
}
