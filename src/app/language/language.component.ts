import { Component } from '@angular/core';
import { Firestore,addDoc,collection,updateDoc,deleteDoc, collectionData, doc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  displayedColumns: string[] = ['position', 'Language', 'Percent'];
   languageList!:Observable<any>;
   languageEntry:FormGroup;
   languageId='';
   saveBtn='Save';
   constructor(private _fb :FormBuilder,private _fireStore:Firestore) {
   this.languageEntry=_fb.group({
     LanguageName:'',
     LanguagePercent:0
    })

   }


   ngOnInit():void {
    this.GetAll();
  }

   onSave(){
    if(this.languageId=='' || this.languageId==undefined){
      const collectionInstance=collection(this._fireStore,'Language');
      addDoc(collectionInstance,this.languageEntry.value).then(()=>{
        console.log("Save Data");
      }).catch((error)=>{
        console.log(error);
      })
      this.languageEntry.reset();
      this.saveBtn='Save';
      this.languageId=''
    }else{
      this.UpDate();
      this.saveBtn='Save';
      this.languageId=''
    }



   }


   GetAll(){
    const collectionIstance=collection(this._fireStore,'Language');
    collectionData(collectionIstance,{idField:'id'}).subscribe((val)=>{
      console.log('Data',val);
    })
    this.languageList=collectionData(collectionIstance,{idField:'id'});
   }

   Edit(id:any){
    this.saveBtn='Update';
    this.languageEntry.patchValue(id);
    console.log(id);
    this.languageId=id.id;
   }

   UpDate(){
    const constance=doc(this._fireStore,'Language',this.languageId)
    updateDoc(constance,this.languageEntry.value).then(()=>{
      console.log('Update Success fully');
    }).catch((error)=>{
      console.log(error);
    });
    this.languageEntry.reset();
   }

}
