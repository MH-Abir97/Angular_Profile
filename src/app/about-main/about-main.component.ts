import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.css']
})
export class AboutMainComponent {
  languageList!:Observable<any>;
  languageList1:any=[];
  languageList2:any=[];
  UserDataList:any=[];

  constructor(private _fireStore:Firestore) {

  }

  ngOnInit():void {
    this.GetAll();
    this.GetAllAbout();
  }
  GetAll(){

    const collectionIstance=collection(this._fireStore,'Language');
    collectionData(collectionIstance,{idField:'id'}).subscribe((val)=>{
      this.languageList1=val.filter((aData:any)=>aData.LanguageType=="Backend").sort((a:any, b:any) => a.Sort.localeCompare(b.Sort));
      this.languageList2=val.filter((aData:any)=>aData.LanguageType =="Frontend" ).sort((a:any, b:any) => a.Sort.localeCompare(b.Sort));
    })
    this.languageList=collectionData(collectionIstance,{idField:'id'});

   }


   GetAllAbout(){
    debugger;
    const collectionInstance=collection(this._fireStore,'EducationAbout');
    collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
      this.UserDataList=data;
    });
    this.UserDataList=collectionData(collectionInstance,{idField:'id'});
  }
}
