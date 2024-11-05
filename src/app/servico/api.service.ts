import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUserById(id: number) {
    throw new Error('Method not implemented.');
  }
  createUser(user: User) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8081/api'; // Altere para o URL da sua API

  constructor(private http: HttpClient) { }

  // Car Methods
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/cars`);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/cars/${id}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}/cars`, car);
  }

  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/cars/${car.id}`, car);
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/cars/${id}`);
  }

  // User Methods
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }
}
