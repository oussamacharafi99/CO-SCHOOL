import { Semester } from "./enums/enum";

export interface ResultDto {
    username: string;
    matter: string;
    semester: Semester;
    classRoomName: string;
    school_name:string;
    firstNote?: number;   
    secondNote?: number;  
    thirdNote?: number;   
    fourthNote?: number;  
    activitiesNote?: number; 
}