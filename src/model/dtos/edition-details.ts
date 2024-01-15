import { Teacher } from "./teacher";
import { TeacherSummaryDto } from "./teachers-summary";

export interface EditionDetailsDto {
   id: number;
   courseName: string;
   startDate: Date;
   finishDate: Date;
   tutor: string;
   pay: string;
   description: string;
   duration: number;
   subjects: string[]; 
   freePlaces?: number;
   teachers: TeacherSummaryDto[]; 
}
