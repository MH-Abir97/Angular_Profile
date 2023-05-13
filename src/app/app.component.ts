import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProfile';
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top
      }
    });
  }

  HomeBtn(route:string){
   debugger;
 
  // window.scrollTo({ top: 0, behavior: 'smooth' });
    // if(route=='home'){
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    //   this.router.navigate(['/home']);
    // }else if(route=='about'){
    //   window.scrollTo(-200,-200);
    //   this.router.navigate(['/about']);
    
    // }
   

  }

}
