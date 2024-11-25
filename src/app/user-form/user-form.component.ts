import { Component, OnInit } from '@angular/core';
import { ApiService,  } from '../servico/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  newUserForm : FormGroup;
  users: User[] = [];

  constructor(private formBuilder: FormBuilder, private userService: ApiService) {}

  ngOnInit() {
    this.initializeNewUserForm();
    this.loadUsers();
  }

  initializeNewUserForm() {
    this.newUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  createUser(newUserData: User) {
    this.userService.createUser(newUserData).subscribe(
      (user) => {
        this.users.push(user);
        this.newUserForm.reset();
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  updateUser(userId: number, updatedUserData: User) {
    this.userService.updateUser(userId, updatedUserData).subscribe(
      (user) => {
        const index = this.users.findIndex(u => u.id === userId);
        this.users[index] = user;
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.users = this.users.filter(u => u.id !== userId);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
