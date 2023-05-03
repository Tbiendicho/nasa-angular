import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(url: string): Observable<object> {
    return this.http.get(url, httpOptions);
  }

}
