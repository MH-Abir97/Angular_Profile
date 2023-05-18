import { Component, ViewChild } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {
  contactEntry:FormGroup;
  contractDataList:any=[];

  constructor(private _fireStore:Firestore,private _fb:FormBuilder) {
   this.contactEntry=_fb.group({
    Name:'',
    Email:'',
    Subject:'',
    Message:'',
   })

  }
  ngOnInit():void {
    this.GetAllAbout();
  }
  GetAllAbout(){
    
    const collectionInstance=collection(this._fireStore,'EducationAbout');
    collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
      this.contractDataList=data;
    });
    this.contractDataList=collectionData(collectionInstance,{idField:'id'});
  }

  OnSave(){
   this.SaveData();
  }


  SaveData(){
    const collectionInstance=collection(this._fireStore,'Contact');
    addDoc(collectionInstance,this.contactEntry.value).then(()=>{
      console.log('Save Successfully');
    }).then((error)=>{
      console.log(error);
    })
    this.contactEntry.reset();
  }
}
