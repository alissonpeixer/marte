import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ResItem {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(
    private http: HttpClient
  ) { }

  async login(username: string, password: string): Promise<boolean> {
    return this.http.get('http://aspx.site:7777/users/').toPromise()
      .then((res: any) => {
        return res.results.some((item : ResItem)=>item.password === password && item.username  === username);
      })
    .catch(() => false);
  }


  async singUP(username: string, password: string): Promise<boolean> {
    console.log(username, password)
    return this.http.post('http://aspx.site:7777/users/', {username,password}).toPromise()
      .then((res: any) => {
        return username === res.username && password === res.password ? true : false;
      })
    .catch(() => false);
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isInAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
