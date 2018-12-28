import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetListService {

  constructor(private _http: HttpClient) { }

  getList() {
    return this._http.get("http://localhost:3000/employeeList");
  }
}
