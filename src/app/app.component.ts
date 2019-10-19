import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  // selector: 'steven-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  @Input('state') 
  set state(state: string) {
      console.debug('client-a received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(
    private router: Router) {
  }

  ngOnInit() {

    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    
    // // Standalone mode
    // if (environment.standalone) {
    //   this.router.navigate(['/client-a/page1']);
    // }

    // // just for demonstration!
    // setTimeout(() => { 
    //   this.message.next('client a initialized!');
    // }, 2000);
    
  }
}
