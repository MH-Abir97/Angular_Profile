import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
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
    
   })
  }

  onSave(){

  }

  ResetBtn(){
    
  }

}
