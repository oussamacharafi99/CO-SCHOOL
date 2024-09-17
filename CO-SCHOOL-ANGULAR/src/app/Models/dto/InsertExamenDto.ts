import { Controle, Semester } from "../enums/enum";

export interface insertExamenDto {
        examenDate: string;
        matter: string;
        semester: Semester;
        profId: number;
        classGroupId: number;
        examenName: Controle;
}

