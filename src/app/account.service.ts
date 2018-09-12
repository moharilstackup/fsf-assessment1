import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccts() {
    return [
      {"name":"John Dee", "address":"jdee"},
      {"name":"Amber Koo", "address":"ake"}
    ];
  }
}
