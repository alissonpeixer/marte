import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ListaService {
  url: string = 'http://192.168.3.214:7771/rest';
  constructor(private http: HttpClient) {}

  lista(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-PO-No-Count-Pending-Requests': 'true',
        'X-PO-Screen-Lock': 'true',
      }),
      params: new HttpParams(),
    };

    return this.http.get<any>(
      `${this.url}/api/framework/v1/users`,
      httpOptions
    );
  }
}
