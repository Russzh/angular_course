export interface Course {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}
