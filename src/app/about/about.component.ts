import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore,addDoc,collection,updateDoc,deleteDoc, collectionData, doc } from '@angular/fire/firestore';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  languageList!:Observable<any>;
  languageList1:any=[];
  languageList2:any=[];
  /**
   *
   */
  constructor(private _fireStore:Firestore) {


  }

  ngOnInit():void {
    this.GetAll();
  }
  GetAll(){
    debugger;
    const collectionIstance=collection(this._fireStore,'Language');
    collectionData(collectionIstance,{idField:'id'}).subscribe((val)=>{
      console.log('Data',val);


    })
    this.languageList=collectionData(collectionIstance,{idField:'id'});
    this.languageList.forEach(aData => {
      //if(aData.LanguageName=="C" ||aData.LanguageName=="C#" || aData.LanguageName=="ASP.NET Core" || aData.LanguageName=="ASP.NET"){
        this.languageList1.push(aData);
        console.log( this.languageList1)
     // }else{
        //this.languageList2.push(aData);
      //}
    });

    // for (let i = 0; i < this.languageList1.length; i++) {
    //     if(this.languageList1[0].LanguageName=="C" ||this.languageList1[0].LanguageName=="C#" || this.languageList1[0].LanguageName=="ASP.NET Core" || this.languageList1[0].LanguageName=="ASP.NET"){
    //       this.languageList1.push(this.languageList1[i]);
    //        }else{
    //          this.languageList2.push(this.languageList1[i]);
    //     }

    // }

   }

}
