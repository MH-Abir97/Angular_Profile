import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Firestore, collectionData, collection,addDoc,deleteDoc,updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileEntry:FormGroup;
  constructor(private _fb:FormBuilder,private _fireStore:Firestore) {
    this.profileEntry=_fb.group({
      name:'',
    })
  }

  SaveProfile(){
    const collectionInstance=collection(this._fireStore, 'Profile');
    addDoc(collectionInstance,this.profileEntry.value).then(()=>{
      console.log('Data Save');
    }).then((erorr)=>{
      console.log(erorr);
    })
  }

}
