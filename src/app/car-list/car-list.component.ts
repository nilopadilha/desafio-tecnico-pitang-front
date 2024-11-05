import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { ApiService } from '../servico/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {


  cars: Car[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.apiService.getCars().subscribe(
      (data) => {
        this.cars = data;
      },
      (error) => {
        console.error('Erro ao buscar carros:', error);
      }
    );
  }

  deleteCar(id: number): void {
    this.apiService.deleteCar(id).subscribe(
      () => {
        this.cars = this.cars.filter(car => car.id !== id);
      },
      (error) => {
        console.error('Erro ao deletar carro:', error);
      }
    );
  }
}
