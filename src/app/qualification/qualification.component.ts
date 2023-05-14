import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {
  saveBtn='Save';
  qualification:FormGroup;
  qualificationList!:Observable<any>;
  qualificationId='';
  constructor(private _fireStore:Firestore,private _fb :FormBuilder) {
   this.qualification=_fb.group({
     EducationBackground:'',
     Session:'',
     institutionName:'',
     Subject:'',
     InstLocation:'',
     Sort:0,
     Height:0,
   })
    
  }

  onSave(){
    if(this.qualificationId=='' || this.qualificationId==undefined){
      this.SaveData();
      this.qualificationId='';
      this.saveBtn="Save";
    }else{
      this.updateData();
      this.qualificationId='';
      this.saveBtn="Save";
    }
   
  }
  ngOnInit():void {
    this.GetAll();
  }
  ResetBtn(){
    this.qualification.reset();
  }

  SaveData(){
    const collectionInstance=collection(this._fireStore,'Qualification')
    addDoc(collectionInstance,this.qualification.value).then(()=>{
      console.log("Save Data");
    }).catch((error)=>{
      console.log(error);
    });
    this.qualification.reset();
  }

  GetAll(){
    const collectionInstance=collection(this._fireStore,'Qualification');
    collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
    //  this.UserDataList=data;
    });
    this.qualificationList=collectionData(collectionInstance,{idField:'id'});
  }

  Edit(data:any){
    this.saveBtn="Update";
    this.qualificationId=data.id;
    this.qualification.patchValue(data);
  }

  updateData(){
    const collectionInstance=doc(this._fireStore,'Qualification',this.qualificationId);
    updateDoc(collectionInstance,this.qualification.value).then(()=>{
      console.log('Update Successfully');
    }).catch((err)=>{
      console.log(err)
    });
    this.qualification.reset();
  }
}
