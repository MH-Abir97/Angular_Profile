import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent {
  imageData='';
  constructor( public dialogRef: MatDialogRef<ImagePreviewComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
 
  }

  ngOnInit():void {
  //  this.imageData=this.data;
  //  console.log('image', this.imageData);
  }
 
 
}
