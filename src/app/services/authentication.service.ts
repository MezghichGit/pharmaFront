import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  /*authenticate(username : any, password : any) {
    if (username === "amine" && password === "1234") {  // verif au niveau backend
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }*/

  authenticate(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiLogin}`, {
        username,
        password,
      })
      .pipe(
        map((data) => {
          sessionStorage.setItem("token", data['token']);
          return data;
        })
        );
    }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("token")
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem("token")
  }


/*
  constructor() { }
  authenticate(username, password) {
    if (username === "amine" && password === "1234") {  // verif au niveau backend
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
*/

}
