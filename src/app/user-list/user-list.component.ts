import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../servico/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'

})
export class UserListComponent implements OnInit{
  users: User[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Erro ao buscar usuários:', error);
      }
    );
  }

  deleteUser(id: number): void {
    this.apiService.deleteUser(id).subscribe(
      () => {
        this.users = this.users.filter(user => user.id !== id);
      },
      (error) => {
        console.error('Erro ao deletar usuário:', error);
      }
    );
  }

}
