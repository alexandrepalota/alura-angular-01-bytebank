export interface Transfer {
  id?: string;
  value: number;
  target: string | number;
  date?: Date;
}
