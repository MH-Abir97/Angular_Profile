import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {

  contractDataList:any=[];

  constructor(private _fireStore:Firestore) {

  }
  ngOnInit():void {
    this.GetAllAbout();
  }
  GetAllAbout(){
    debugger;
    const collectionInstance=collection(this._fireStore,'EducationAbout');
    collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
      this.contractDataList=data;
    });
    this.contractDataList=collectionData(collectionInstance,{idField:'id'});
  }
}
