import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public accts = [];

  constructor(private _accountService:AccountService) { }

  ngOnInit() {
    this.accts = this._accountService.getAccts();
  }

}
