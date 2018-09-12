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

  today = new Date();
  minAge = 18;
  maxAge = 150;
  // minDate = new Date(2000, 0, 1);
  // maxDate = new Date(2020, 0, 1);
  public minAgeDate = new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());
  public maxAgeDate = new Date(this.today.getFullYear() - this.maxAge, this.today.getMonth(), this.today.getDate());
  maxDate=this.minAgeDate;
  minDate=this.maxAgeDate;


  @ViewChild ('newAcctForm')
  newAcctForm: NgForm;

  public accts = [];

  constructor(private _accountService:AccountService, private router: Router ) { }

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

    this._accountService
    .addAccount(this.newAcctForm.value)
    .subscribe((result)=>{
      console.log(result);
    });

    this.newAcctForm.resetForm();
    this.router.navigate(['/thankyou']);
  }

}
