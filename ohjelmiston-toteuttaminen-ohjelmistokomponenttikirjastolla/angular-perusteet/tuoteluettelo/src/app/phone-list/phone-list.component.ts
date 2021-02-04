import { Component, OnInit } from '@angular/core';
import { phones } from '../phone-details';



@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  
  phones = phones;
  //term;
  order: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  selectChange(event: any) {
    this.order = event.target.value;
  }

}
