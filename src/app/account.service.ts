import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAccount } from './account';
import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _url: string = "/assets/data/accounts.json"

  constructor(private http: HttpClient) { }

  getAccts(): Observable<IAccount[]> {

    return this.http.get<IAccount[]>(this._url);
    
    // return [
    //   {"name":"John Dee", "address":"jdee"},
    //   {"name":"Amber Koo", "address":"ake"}
    // ];
  }

  addAccount(newAcct){
    return this.http.post(`${environment.api_url}addAccount`, newAcct);
  }

}
