import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{
  accounts: {name:string,status:string}[] = [];


  constructor(private accountService:AccountService)
  {

  }
  ngOnInit()
  {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(newAccount: {name:string,status:string}){
    this.accountService.addAccount(newAccount);
  }
  onStatusChanged(updateInfo: {id:number,newStatus:string})
  {
    this.accountService.updateStatus(updateInfo.id, updateInfo.newStatus);
  }

}
