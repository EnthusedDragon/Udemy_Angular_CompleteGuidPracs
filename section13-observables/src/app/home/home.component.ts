import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObs: Subscription;

  constructor() { }

  ngOnInit() {
    /*this.firstObs = interval(1000).subscribe(
      count =>{
        console.log(count);
      }
    );*/
    const customIntervalObs = new Observable(observer => {
      let counter = 0;
      setInterval(()=>{
        observer.next(counter);

        if(counter === 2)
        {
          observer.complete();
        }

        if(counter>3)
        {
          observer.error(new Error('Count is greater than 3'));
        }
        counter++;
      },1000);
    });

    let pipeObs = customIntervalObs.pipe(filter(data=>{
      return data > 0;
    }),map((data:number)=>{
      return 'Round: ' + ( data + 1);
    }));

    this.firstObs = pipeObs.subscribe(count =>
      {
        console.log(count);
      }, error=>{
        console.log(error);
        alert("ERROR!");
      }, ()=>{
        alert("COMPLETE!");
      });
  }
  ngOnDestroy(){
    this.firstObs.unsubscribe();
  }
}
