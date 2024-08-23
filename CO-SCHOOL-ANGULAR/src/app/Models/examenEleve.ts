import { Eleve } from "./eleve";
import { Examen } from "./examen";

export interface ExamenEleve {
  id: number;
  examenNote: number;
  eleve: Eleve;
  examen: Examen;
}
