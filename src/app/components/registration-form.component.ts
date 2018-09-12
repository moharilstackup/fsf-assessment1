import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  @ViewChild ('newAcctForm')
  newAcctForm: NgForm;

  public accts = [];

  constructor(private _accountService:AccountService) { }

  ngOnInit() {
    // this.accts = this._accountService.getAccts();

    this._accountService.getAccts()
      .subscribe(data=>this.accts=data);
  }

  newAcct() {
    console.log("newAcct() : ")
    for (let i in this.newAcctForm.value) {
      console.log('i=',i,' ,v=', this.newAcctForm.value[i]);
    } 


    this.newAcctForm.resetForm();
  }

}
