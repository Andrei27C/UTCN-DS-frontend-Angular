import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {User} from "../../User/User";

export interface UserAuth {
  userId: number;
  userName: string;
  role: string;
}

export enum Role {
  USER = "user",
  ADMIN = "admin"
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  user: UserAuth | undefined;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  public login(username: string, password: string): Observable<UserAuth> {
    console.log("username: " + username + " - password:" + password);
    return this.http.post<UserAuth>(
      environment.apiUrl + 'User/login/',
      {
        userName: username,
        password: password,
      },
    ).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  // public register(name: string, username: string, password: string): Observable<UserAuth> {
  //   return this.http.post<UserAuth>(
  //     environment.apiUrl + 'register/',
  //     {
  //       name: name,
  //       username: username,
  //       password: password,
  //     }
  //   ).pipe(
  //     catchError((err) => {
  //       return throwError(err);
  //     })
  //   );
  // }

  // public logout() {
  //   sessionStorage.removeItem(this.tokenKey);
  //   sessionStorage.removeItem("currentUserName");
  //   this.router.navigate(['/']).then(r => {});
  // }

  public isLoggedIn(): boolean {
    let currentuser = sessionStorage.getItem("currentUser");
    return currentuser != null && currentuser.length > 0;
  }

  // public getToken(): string | null {
  //   return this.isLoggedIn() ? sessionStorage.getItem(this.tokenKey) : null;
  // }
  //
  public getCurrentUser(): User | null {
    return this.isLoggedIn() ? JSON.parse(sessionStorage.getItem("currentUser") || '{}') : null
  }

  public redirect(user: User) {
    if (user.role == 'user') {
      this.router.navigate(['/User']).then(() => {});
    } else if (user.role == 'admin') {
      this.router.navigate(['/Admin']).then(() => {});
    } else {
      this.router.navigate(['/login']).then(() => {});
    }
  }
}
