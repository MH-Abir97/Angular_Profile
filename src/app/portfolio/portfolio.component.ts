import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  
})
export class PortfolioComponent {

  constructor(public dialog:MatDialog) {
  }

  // OpenDialog(){

  //   this.dialog.open(ImagePreviewComponent);
  // }

  OpenDialog(a:string): void {
    const dialogRef = this.dialog.open(ImagePreviewComponent, {
      width: '100%',
      height:'80%',
      data:a ,
    });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Dialog closed with result:', result);
    //   // Handle the result here
    // });
  }
 
}
