import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API_URL = environment.apiUrl + '/user';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  save(user: any): Observable<any> {
    return this.http.post(this.API_URL, user);
  }
}
