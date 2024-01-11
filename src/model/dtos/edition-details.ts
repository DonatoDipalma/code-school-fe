import { Teacher } from "./teacher";

export interface EditionDetailsDto {
   teacher: any;
   id: number;
   courseName: string;
   startDate : Date;
   finishDate : Date;
   tutor: string;
   pay : string;
   description: string;
   duration: number;
   subjects: string;
   freePlaces: number;
 }