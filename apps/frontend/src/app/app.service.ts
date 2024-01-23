import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
