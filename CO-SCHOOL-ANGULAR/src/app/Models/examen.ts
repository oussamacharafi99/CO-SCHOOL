import { Semester } from "./enums/enum";
import { ExamenEleve } from "./examenEleve";
import { Professeur } from "./professeur";

export interface Examen {
  id?: number;
  examenName: string;
  examenDate: string;
  classRoom: string;
  matter: string;
  semester: Semester;
  professeur: Professeur;
  examenEleves?: ExamenEleve[];
}
