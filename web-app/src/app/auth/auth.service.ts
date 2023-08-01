import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(
    private http: HttpClient
  ) { }

  async login(username: string, password: string): Promise<boolean> {
    // return this.http.post('/api/login', { username, password }).toPromise()
    //   .then((response: any) => {
    //     this.isAuthenticated = true;
    //     return true;
    //   })
    // .catch(() => false);

    if(username === 'a' && password === 'a'){
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isInAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
