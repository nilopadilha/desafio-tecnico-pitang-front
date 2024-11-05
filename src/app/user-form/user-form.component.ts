import { Component, OnInit } from '@angular/core';
import { ApiService,  } from '../servico/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserRole } from '../models/UserRole';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
[x: string]: any;
  userForm: FormGroup;
  isEditMode = false;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private userService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required],
      phone: [''],
      role: [UserRole.USER, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.userId = +params['id'];
        this.loadUser(this.userId);
      }
    });
  }

  loadUser(id: number): void {
    this.userService.getUserById(id).subscribe(
      (user) => {
        this.userForm.patchValue(user);
      },
      (error) => console.error('Error loading user:', error)
    );
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      if (this.isEditMode) {
        this.userService.updateUser(this.userId, user).subscribe(
          () => this.router.navigate(['/users']),
          (error) => console.error('Error updating user:', error)
        );
      } else {
        this.userService.createUser(user).subscribe(
          () => this.router.navigate(['/users']),
          (error) => console.error('Error creating user:', error)
        );
      }
    }
  }
  cancel(): void {
    if (this.userForm.dirty) {
      if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
        this.router.navigate(['/users']);
      }
    } else {
      this.router.navigate(['/users']);
    }
  }
}
