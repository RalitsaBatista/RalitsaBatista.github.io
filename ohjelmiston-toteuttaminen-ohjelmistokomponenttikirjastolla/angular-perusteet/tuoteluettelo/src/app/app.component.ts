import { Component } from '@angular/core';



interface Phone {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <pre>{{phones | json}}</pre>
`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'Tuoteluettelo';
  //items: string[] = [{ name: "blabla" }];

  
  }

