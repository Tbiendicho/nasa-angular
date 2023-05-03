import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Accept': 'application/json',
      'allow-origin': '*',
      'allow_headers': '*',
      'Access-Control-Max-Age': '3600'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class AsteroidesService {

  constructor(private http: HttpClient) { }

  getAsteroides(url: string): Observable<object> {
    return this.http.get(url);
  }

}
