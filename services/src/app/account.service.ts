import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService:LoggingService){

      }

      addAccount(account:{name:string,status:string})
      {
        this.accounts.push(account);
        this.loggingService.logStatusChanged(status);
      }

      updateStatus(id:number, status:string)
      {
        this.accounts[id].status = status;
        this.loggingService.logStatusChanged(status);
      }
}