import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(private accountService: AccountService){
    accountService.statusUpdated.subscribe(
      (status:string)=>alert('New statys ' + status)
    )
  }
  onCreateAccount(accountName:string, accountStatus:string){
    this.accountService.addAccount({name: accountName, status: accountStatus});
  }
}
