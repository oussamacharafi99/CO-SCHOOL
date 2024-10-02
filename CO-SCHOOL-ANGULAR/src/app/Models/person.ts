import { Role } from "./enums/enum";

export interface Person {
  id?: number;
  identificationId : string;
  username: string;
  age: number;
  gender: string;
  email: string;
  password: string;
  roles: Role[];
}
