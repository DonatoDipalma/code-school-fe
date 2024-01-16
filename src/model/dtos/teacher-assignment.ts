import { EditionModule } from "./edition-module";
import { TeacherSummaryDto } from "./teachers-summary";

export interface TeacherAssignmentDto{
    teacherSummary: TeacherSummaryDto,
    editionModuleId: number
}