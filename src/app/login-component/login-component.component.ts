import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servico/auth.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
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
