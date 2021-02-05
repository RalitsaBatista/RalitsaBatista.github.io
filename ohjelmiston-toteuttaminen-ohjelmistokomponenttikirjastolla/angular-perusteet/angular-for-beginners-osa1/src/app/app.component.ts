import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:any;
  data = { 
    title:'Angular-for-beginners-osa1'
};

onLogoClicked() {
  alert('Hello World')
}

onKeyUp(newTitle:string){
  this.data.title = newTitle;
}
}
