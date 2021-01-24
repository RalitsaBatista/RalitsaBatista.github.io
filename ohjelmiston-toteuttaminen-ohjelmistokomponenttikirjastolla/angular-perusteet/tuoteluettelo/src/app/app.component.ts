import { Component, Input } from '@angular/core';
import phones from './app/puhelinten-tuotetiedot'


type PhoneType = [{
  id: number,
  name: string,
  additionalFeatures: string,
  availability: string,
  description:string,
  sizeAndWeight: number,
  storage: number,
}]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuoteluettelo';

}
//OpenOptions() {

  //let DataObject = {
    //id: this.itemId,
    //itemName: this.itemName,
    //itemQuantity: this.itemQuantity,
    //unit: this.unit,
    //  }

  //this.LinkToDataSharingService.ShareData(DataObject)

  //this.LinkToDataSharingService.toggleOptions();
 //}



