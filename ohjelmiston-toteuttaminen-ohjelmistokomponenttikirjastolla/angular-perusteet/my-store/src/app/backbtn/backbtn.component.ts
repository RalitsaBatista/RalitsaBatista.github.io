import { Component, OnInit } from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-backbtn',
  templateUrl: './backbtn.component.html',
  styleUrls: ['./backbtn.component.css']
})
export class BackbtnComponent implements OnInit {

faLongArrowAltLeft = faLongArrowAltLeft;
  constructor() { }

  ngOnInit() {
  }

}