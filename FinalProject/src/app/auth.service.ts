import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs'; // Importa 'of' de 'rxjs'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const currentUser = localStorage.getItem('currentUser');
      this.currentUserSubject = new BehaviorSubject<any>(currentUser ? JSON.parse(currentUser) : null);
    } else {
      this.currentUserSubject = new BehaviorSubject<any>(null);
    }
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    console.log('Attempting login with:', username, password);
    return this.http.post<any>(`http://localhost:8082/login`, { username, password })
      .pipe(
        map(user => {
          console.log('Login response:', user);
          return user;
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
        // Assuming response contains the registered user object
        return response;
      }));
  }

  setLoggedInUser(username: string) {
    localStorage.setItem('loggedInUser', username);
  }

  clearLoggedInUser() {
    localStorage.removeItem('loggedInUser');
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return of(null); // Ahora 'of' está definido
  }
}