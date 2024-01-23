export interface Course {
  id?: number;
  title: string;
  duration: number;
  maxParticipants: number;
  areaId: number;
  courseType: string;
  payment: string;
  skillLevel: string;
}