export interface ICourse {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  authors?: string;
  topRated: boolean;
}
