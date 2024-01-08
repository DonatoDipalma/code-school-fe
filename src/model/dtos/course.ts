export interface Course {
  id?: number;
  title: string;
  duration: number;
  maxParticipants: number;
  areaId: string;
  courseType: string;
  payment: string;
  skillLevel: string;
}