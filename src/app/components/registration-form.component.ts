import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  //Date of birth related stuff
  today = new Date();
  minAge = 18;
  maxAge = 150;
  maxDate = new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());
  minDate = new Date(this.today.getFullYear() - this.maxAge, this.today.getMonth(), this.today.getDate());

  @ViewChild('newAcctForm')
  newAcctForm: NgForm;

  public accts = [];

  constructor(private _accountService: AccountService, private router: Router) { }

  ngOnInit() {
    // this.accts = this._accountService.getAccts();
    this._accountService.getAccts()
      .subscribe(data => this.accts = data);
  }

  newAcct() {
    console.log("newAcct() : ")
    for (let i in this.newAcctForm.value) {
      console.log('i=', i, ' ,v=', this.newAcctForm.value[i]);
    }

    this._accountService
      .addAccount(this.newAcctForm.value)
      .subscribe((result) => {
        console.log(result);
      });

    this.newAcctForm.resetForm();
    this.router.navigate(['/thankyou']);
  }

}
