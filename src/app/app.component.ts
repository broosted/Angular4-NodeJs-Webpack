import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter';

interface AppState {
  counter: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  counter: Observable<number>;
  
    constructor(private store: Store<AppState>) {
      this.counter = store.select('counter');
    }
  
    increment(){
      this.store.dispatch({ type: INCREMENT });
    }
  
    decrement(){
      this.store.dispatch({ type: DECREMENT });
    }
  
    reset(){
      this.store.dispatch({ type: RESET });
    }

    
}
