import { ClasseGroup } from "./ClasseGroup";
import { ExamenEleve } from "./examenEleve";
import { Person } from "./person";

export interface Eleve extends Person {
  classeGroup : ClasseGroup;
  examenEleves?: ExamenEleve[];
}
