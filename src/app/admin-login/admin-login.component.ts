import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isLoginMode = true;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Form Submitted', this.loginForm.value);
      // Add your login logic here
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Register Form Submitted', this.registerForm.value);
      // Add your registration logic here
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
