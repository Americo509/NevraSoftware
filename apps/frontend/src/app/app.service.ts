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

  private url = 'http://localhost:3000/api/user/';

  getProductById(id: number) {
    return this.http.get(this.url + 'produtos/' + id)
  }

}
