import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  saveBtn='Save';
  socialEntry:FormGroup;
  socialId='';
  socialDataList!:Observable<any>;
   constructor(private _fb :FormBuilder,private _fireStore:Firestore) {
   this.socialEntry=_fb.group({
    SocialLink:'',
    SocialMedia:'',

   })
  }

  onSave(){
    if(this.socialId=='' || this.socialId==undefined){
      this.SaveData();
      this.socialId='';
      this.saveBtn='Save';
    }else{
      this.Update();
      this.socialId='';
      this.saveBtn='Save';
    }

  }

  ResetBtn(){

  }
  ngOnInit():void {
   this.GetAll();
  }

  SaveData(){
    const collectionInstance=collection(this._fireStore,'SocialMedia')
    addDoc(collectionInstance,this.socialEntry.value).then(()=>{
      console.log("Save Data");
    }).catch((error)=>{
      console.log(error);
    });
    this.socialEntry.reset();
  }

  GetAll(){
    const collectionInstance=collection(this._fireStore,'SocialMedia');
    collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
    //  this.UserDataList=data;
    });
    this.socialDataList=collectionData(collectionInstance,{idField:'id'});
  }

  Edit(data:any){
    this.saveBtn='Update';
    this.socialEntry.patchValue(data);
    this.socialId=data.id;

   }

   Update(){
    const constance=doc(this._fireStore,'SocialMedia', this.socialId)
    updateDoc(constance,this.socialEntry.value).then(()=>{
      console.log('Update Success fully');
    }).catch((error)=>{
      console.log(error);
    });
    this.socialEntry.reset();
   }
}
