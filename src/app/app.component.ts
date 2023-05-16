import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProfile';
  socialDataList!:Observable<any>;
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor(private router: Router,private _fireStore:Firestore) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top
      }
    });
  }


  HomeBtn(route:string){


  // window.scrollTo({ top: 0, behavior: 'smooth' });
    // if(route=='home'){
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    //   this.router.navigate(['/home']);
    // }else if(route=='about'){
    //   window.scrollTo(-200,-200);
    //   this.router.navigate(['/about']);

    // }


  }


  ngOnInit():void {
    this.GetAll();
   }

   GetAll(){
    const collectionInstance=collection(this._fireStore,'SocialMedia');
    collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
    //  this.UserDataList=data;
    });
    this.socialDataList=collectionData(collectionInstance,{idField:'id'});
  }

}
