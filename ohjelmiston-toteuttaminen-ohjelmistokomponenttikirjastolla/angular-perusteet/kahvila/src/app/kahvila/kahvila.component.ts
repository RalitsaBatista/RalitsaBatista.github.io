import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kahvila',
  templateUrl: './kahvila.component.html',
  styleUrls: ['./kahvila.component.css']
})
export class KahvilaComponent implements OnInit { ngOnInit(): void {}
  @Output() myyntiTapahtuma = new EventEmitter<{poydanNumero:string, myyntiMaara:string}>();
  @Output() tarjoiluTapahtuma = new EventEmitter<{poydanNumero:string, myyntiMaara:string}>();
  
  uusipoydanNumero = '';
  uusimyyntiMaara ='';
  
  
  
  
 kahviaMyyty() {
    this.myyntiTapahtuma.emit({
      poydanNumero: this.uusipoydanNumero,
      myyntiMaara: this.uusimyyntiMaara
    })
  }

  kahviaTarjoiltu() {
   this.tarjoiluTapahtuma.emit({
      poydanNumero: this.uusipoydanNumero,
      myyntiMaara: this.uusimyyntiMaara
   }); 
  } 
}



