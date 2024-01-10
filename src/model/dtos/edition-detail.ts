export interface EditionDetail {
    id: number;
    startDate: Date;
    finishDate: Date; 
    pay: string;
    tutor: string;

    // CLASSE AREA
    areaName: string;

    // CLASSE COURSE
    courseTitle: string;

    // CLASSE ROOM
    roomName: string;
    isSmart: string;
}