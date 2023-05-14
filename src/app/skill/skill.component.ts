import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  saveBtn='Save';
  SkillEntrty:FormGroup;
  SkillsList!:Observable<any>;
  SkillId='';
  constructor(private _fireStore:Firestore,private _fb :FormBuilder) {
   this.SkillEntrty=_fb.group({
    Project:'',
    ModuleName:'',
    Sort:0,
   })
  }

  ngOnInit():void {
    this.GetAll();
  }

  onSave(){
    if(this.SkillId=='' || this.SkillId==undefined){
      this.SaveData();
      this.SkillId=='';
      this.saveBtn='Save';
    }else{
      this.updateData();
      this.SkillId=='';
      this.saveBtn='Save';
    }
  
  }

  ResetBtn(){
    this.SkillEntrty.reset();
    this.saveBtn='Save';
  }

  SaveData(){
    const instance=collection(this._fireStore,'Skills');
    addDoc(instance,this.SkillEntrty.value).then(()=>{
      console.log('Save Data');
    }).then((error)=>{
      console.log(error);
    });
    this.SkillEntrty.reset();
  }

  GetAll(){
     const instance=collection(this._fireStore,'Skills');
     collectionData(instance,{idField:'id'}).subscribe((data)=>{

     })
     this.SkillsList= collectionData(instance,{idField:'id'});
  }

  Edit(data:any){
    this.saveBtn='Update';
     this.SkillEntrty.patchValue(data);
     this.SkillId=data.id;
  }

  updateData(){
    const instance=doc(this._fireStore,'Skills',this.SkillId);
    updateDoc(instance,this.SkillEntrty.value).then(()=>{
      console.log('Update Data');
    }).then((error)=>{
      console.log(error);
    });
    this.SkillEntrty.reset();
  }

  Delete(id:any){
    const instance=doc(this._fireStore,'Skills',id.id);
    deleteDoc(instance).then(()=>{
      console.log('Delete Success');
    }).then((error)=>{
      console.log(error);
    })
  }
}
