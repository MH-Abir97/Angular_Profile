import { Component } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
//  dispaly:any;
//  center:google.maps.LatLngLiteral={lat:24,lng:12}
//  zoom=4;

contactList!:Observable<any>;
  constructor(private _firebase:Firestore) {

  }

  ngOnInit() {
   this.GetAllContactData();
  }

  GetAllContactData(){
    const collectionInstance=collection(this._firebase,'Contact');
    collectionData(collectionInstance,{idField:'id'}).subscribe((ad:any)=>{
    //this.contactList=ad;
    })
    this.contactList=collectionData(collectionInstance,{idField:'id'});
  }

 
  Delete(id:any){
    let text;
    if (confirm("Are you want to Delete !!!") == true) {
      const instance=doc(this._firebase,'Contact',id.id);
      deleteDoc(instance).then(()=>{
        console.log('Delete Success');
      }).then((error)=>{
        console.log(error);
      })
    } else {
      text = "Canceled!";
    }
   
  }
  

}
