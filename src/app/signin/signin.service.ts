import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SigninService {
  url: string = 'http://192.168.3.214:7771/rest';
  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-PO-Screen-Lock': 'true',
      }),
      params: new HttpParams(),
    };

    return this.http.post<any>(
      `${this.url}/api/oauth2/v1/token?grant_type=password&password=${password}&username=${login}`,
      {}
    );
  }
}
