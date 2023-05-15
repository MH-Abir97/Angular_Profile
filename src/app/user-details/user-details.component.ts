import { Component } from '@angular/core';
import { Firestore,addDoc,collection,updateDoc,deleteDoc, collectionData, doc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  saveBtn='Save';
  userEntry:FormGroup;
  userId='';
  UserDataList!:Observable<any>;
   constructor(private _fb :FormBuilder,private _fireStore:Firestore) {
   this.userEntry=_fb.group({
    DescriptionOne:'',
    DescriptionTwo:'',
    Degree:'',
    Session:'',
    University:'',
    Grade:'',
    DateOfBirth:'',
    Website:'',
    Phone:'',
    Address:'',
    HardWork:'',
    HofSupport:'',
    Project:'',
    HappyClient:'',
    Email:'',
    Location:'',
    DescriptionThree:'',
    Designation:'',
    formAdnToJoining:'',
    WorkingOrganization:'',
   })
  }

  ngOnInit():void {
    this.GetAll();
  }
  onSave(){
    if(this.userId=='' || this.userId==undefined){
      this.SaveData();
      this.userId='';
      this.saveBtn='Save';
    }else{
      this.Update();
      this.userId='';
      this.saveBtn='Save';
    }

  }

  SaveData(){
    const collectionInstance=collection(this._fireStore,'EducationAbout')
    addDoc(collectionInstance,this.userEntry.value).then(()=>{
      console.log("Save Data");
    }).catch((error)=>{
      console.log(error);
    });
    this.userEntry.reset();
  }

GetAll(){
  const collectionInstance=collection(this._fireStore,'EducationAbout');
  collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
  //  this.UserDataList=data;
  });
  this.UserDataList=collectionData(collectionInstance,{idField:'id'});
}

Edit(data:any){
 this.saveBtn='Update';
 this.userEntry.patchValue(data);
 this.userId=data.id;

}

Update(){
  const constance=doc(this._fireStore,'EducationAbout', this.userId)
  updateDoc(constance,this.userEntry.value).then(()=>{
    console.log('Update Success fully');
  }).catch((error)=>{
    console.log(error);
  });
  this.userEntry.reset();
 }

 ResetBtn(){
  this.userEntry.reset();
  this.GetAll();
}

}

