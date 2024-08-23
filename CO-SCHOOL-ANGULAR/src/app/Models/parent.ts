import { Eleve } from "./eleve";
import { Person } from "./person";

export interface Parent extends Person {
  eleve: Eleve;
}
