import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const currentUser = localStorage.getItem('loggedInUser');
      this.currentUserSubject = new BehaviorSubject<any>(currentUser ? JSON.parse(currentUser) : null);
    } else {
      this.currentUserSubject = new BehaviorSubject<any>(null);
    }
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private getToken(): string | null {
    return localStorage.getItem('token'); // Assuming the token is stored with this key
  }

  private getHttpOptions() {
    const token = this.getToken();
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log('Attempting login with:', username, password);
    return this.http.post<any>(`http://localhost:8082/login`, { username, password })
      .pipe(
        map(response => {
          console.log('Login response:', response);
          if (response && response.user && response.user.username) {
            localStorage.setItem('token', response.token); // Save token
            this.setLoggedInUser(response.user);
            this.currentUserSubject.next(response.user);

            console.log('User set in local storage:', response.user);
          }
          return response;
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => new Error('Failed to log in'));
        })
      );
  }


  register(user: any): Observable<any> {
    return this.http.post(`http://localhost:8082/register`, user)
      .pipe(map(response => {

        return response;
      }));
  }

  setLoggedInUser(user: any) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  clearLoggedInUser() {
    localStorage.removeItem('loggedInUser');
  }

  logout() {

    localStorage.removeItem('loggedInUser');
    this.currentUserSubject.next(null);
    return of(null);
  }


  updateUser(user: any): Observable<any> {
    return this.http.put(`http://localhost:8082/user/update`, user, this.getHttpOptions())
      .pipe(
        map(response => {
          this.setLoggedInUser(response);
          this.currentUserSubject.next(response);
          return response;
        }),
        catchError(error => {
          console.error('Update error:', error);
          return throwError(() => new Error('Failed to update user'));
        })
      );
  }

}