import { Eleve } from "./eleve";

export interface Absence {
    id?: number;
    date: string; 
    time: string; 
    motif: string;
    status: boolean;
    eleve: Eleve; 
  }