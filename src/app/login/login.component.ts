import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private userService = inject(UserService);
  constructor() {}
  ngOnInit(): void {}
  
  login(loginForm: any) {
    console.log("Form is submitted.");
    console.log(loginForm.value);
    this.userService.login(loginForm)
    .subscribe(
      (response:any) => {
        console.log(response)
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
}
