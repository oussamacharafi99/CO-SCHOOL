import { Eleve } from "./eleve";
import { Professeur } from "./professeur";

export interface ClasseGroup {
    id: number;
    class_room_name: string;
    schoolName: string;
    eleves: Eleve[];
    professeurs: Professeur[];
  }
  