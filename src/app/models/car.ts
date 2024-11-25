export interface Car {
[x: string]: any;

  id: number;
  year: number;
  licensePlate: string;
  model: string;
  color: string;
  userId: number; // O ID do usuário associado
}
