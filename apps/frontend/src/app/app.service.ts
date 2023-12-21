import { Injectable } from '@angular/core';
import { environment } from './environmant';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  saveLocally = 'nevra';

  createUser(name: string, email: string, password: string, cep: string) {
    return this.http.post<User>(`${environment.apiBaseUrl}/users`, {
      name,
      email,
      password,
      cep,
    });
  }

  saveUserLocally(user: User) {
    localStorage.setItem(this.saveLocally, JSON.stringify(user));
  }

  getUserLocally() {
    const user = localStorage.getItem(this.saveLocally);
    return user ? (JSON.parse(user) as User) : null;
  }
}
