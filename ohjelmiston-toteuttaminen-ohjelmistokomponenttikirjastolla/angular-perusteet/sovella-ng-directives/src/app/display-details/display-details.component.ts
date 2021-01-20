import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  details = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad quibusdam nulla error omnis sequi placeat assumenda ut nostrum in id, doloremque commodi fugiat officia perspiciatis quod cupiditate? Commodi, tempora."];

  onShowDisplay() {
    this.details.push("");
  }

  onRemoveDetail(id: number) {
    const position = id + 0;
    this.details.splice(position,1);
  }

}
