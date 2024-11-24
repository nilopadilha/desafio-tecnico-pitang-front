import { Component, OnInit } from '@angular/core';
import { ApiService,  } from '../servico/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserRole } from '../models/UserRole';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: ApiService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  createUser(user: User) {
    this.userService.createUser(user).subscribe((newUser) => this.users.push(newUser));
  }

  updateUser(id: number, user: User) {
    this.userService.updateUser(id, user).subscribe((updatedUser) => {
      const index = this.users.findIndex((u) => u.id === id);
      this.users[index] = updatedUser;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((u) => u.id !== id);
    });
  }
}

// login.component.ts
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.login, this.password).subscribe(
      (token) => {
        // Salvar o token no localStorage ou em um serviço de autenticação
        this.router.navigate(['/users']);
      },
      (error) => {
        // Exibir uma mensagem de erro para o usuário
      }
    );
  }
}
Este é

Regenerate Response

