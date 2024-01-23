export interface Course {
  id?: number;
  title: string;
  duration: number;
  maxPartecipants: number;
  areaId: string;
  courseType: string;
  payment: string;
  skillLevel: string;
}