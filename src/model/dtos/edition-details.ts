import { TeacherAssignmentDto } from "./teacher-assignment";

export interface EditionDetailsDto {
   id: number;
   courseName: string;
   roomName: string;
   startDate: Date;
   finishDate: Date;
   tutor: string;
   pay: string;
   description: string;
   duration: number;
   subjects: string[]; 
   freePlaces?: number;
   teachers: TeacherAssignmentDto[];
}
