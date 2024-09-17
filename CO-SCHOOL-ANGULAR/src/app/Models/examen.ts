import { Semester } from "./enums/enum";
import { ExamenEleve } from "./examenEleve";
import { Professeur } from "./professeur";

export interface Examen {
  id?: number;
  examen_name: string;
  examen_date: string;
  class_room: string;
  matter: string;
  semester: Semester;
  professeur: Professeur;
  examenEleves?: ExamenEleve[];
}
