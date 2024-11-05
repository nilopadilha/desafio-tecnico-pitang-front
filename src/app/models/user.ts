import { Car } from "./car";
import { UserRole } from "./UserRole";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
    login: string;
    password: string;
    phone?: string;
    role: UserRole;
    cars: Car[]; // Lista de carros associados ao usuário
}
