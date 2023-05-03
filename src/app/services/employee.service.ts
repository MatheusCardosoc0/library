import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) {}

  getBooks(): Observable<any>{
    return this._http.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=SQpAENzl40MiCq1CjyoIIDud7evGcJtz")
  }
}
