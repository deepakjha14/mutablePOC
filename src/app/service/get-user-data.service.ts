import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  constructor(private _http: HttpClient) { }

  getUserDataList(): any {
    return this._http.get("http://localhost:3000/userData");
  }
}
