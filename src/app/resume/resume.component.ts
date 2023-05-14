import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],

})
export class ResumeComponent {

  UserDataList:any=[];
  qualificationList:any=[];
  SkillsList:any=[];
  constructor(private _fireStore:Firestore) {

  }

  ngOnInit():void {
    this.GetAllAbout();
    this.GetAll();
    this.GetAllSkills();
   
  }
  GetAllAbout(){
    debugger;
    const collectionInstance=collection(this._fireStore,'EducationAbout');
    collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
      this.UserDataList=data;
    });
    this.UserDataList=collectionData(collectionInstance,{idField:'id'});
  }

  GetAll(){
    const collectionInstance=collection(this._fireStore,'Qualification');
    collectionData(collectionInstance,{idField:'id'}).subscribe((data:any)=>{
    //  this.UserDataList=data;
    if(data.length>0){
      this.qualificationList=data.sort((a:any, b:any) => a.Sort.localeCompare(b.Sort));
    }

    });
    this.qualificationList=collectionData(collectionInstance,{idField:'id'});
    
  }

  GetAllSkills(){
    const instance=collection(this._fireStore,'Skills');
    collectionData(instance,{idField:'id'}).subscribe((data)=>{

    })
    this.SkillsList= collectionData(instance,{idField:'id'});
 }


}
