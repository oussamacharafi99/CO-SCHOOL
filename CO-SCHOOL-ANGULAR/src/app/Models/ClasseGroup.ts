import { Eleve } from "./eleve";
import { Professeur } from "./professeur";

export interface ClasseGroup {
    id: number;
    classRoomName: string;
    schoolName: string;
    eleves: Eleve[];
    professeurs: Professeur[];
  }
  