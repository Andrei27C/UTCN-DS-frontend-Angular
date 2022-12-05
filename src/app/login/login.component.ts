import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthenticationService, UserAuth} from '../services/authentication/authentication.service';
import {UserService} from "../User/user.service";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  errorMessage = '';
  user: UserAuth | undefined;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  storeUser(id: any): void {
    console.log(id)
    this.userService.getUserById(id)
      .subscribe({
        next: (data) => {
          console.log(data)
          sessionStorage.setItem("currentUser", JSON.stringify(data));
        },
        error: (e) => console.error(e)
      })
  }

  public onSubmit() {
    this.errorMessage = "";
    this.authenticationService.login(
      this.loginForm.get('userName')!.value,
      this.loginForm!.get('password')!.value
    ).subscribe({
      next: (user) => {
        this.user = {
          userId: user.userId,
          userName: user.userName,
          role: user.role
        }
        console.log(user);

        // const token = this.authenticationService.getToken() as string;
        // const payload = jwtDecode(token) as any;

        this.storeUser(this.user.userId);

        console.log(this.authenticationService.getCurrentUser());

        this.authenticationService.redirect(this.user);

      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }
}
