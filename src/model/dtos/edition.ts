import { Teacher } from "./teacher";
import { TeacherSummaryDto } from "./teachers-summary";

export interface Edition {
    id: number;
    courseName: string;
    startDate : Date;
    finishDate : Date;
    tutor: string;
    pay : string;
    showDetails: boolean;
  }