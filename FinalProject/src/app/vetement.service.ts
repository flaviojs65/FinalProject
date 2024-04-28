import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vetement } from './vetments';

@Injectable({
  providedIn: 'root'
})
export class VetementService {

  private apiUrl = 'http://localhost:8082/api/vetements';

  constructor(private http: HttpClient) { }

  rechercherVetement(query: string): Observable<Vetement[]> {
    return this.http.get<Vetement[]>(`${this.apiUrl}/rechercher?nom=${query}`);
  }
}
