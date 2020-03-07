import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-machine',
  templateUrl: './single-machine.component.html',
  styleUrls: ['./single-machine.component.scss']
})
export class SingleMachineComponent {

  @Input() machine;

showContent = false;

constructor() { }

toggleContent = () => {
  this.showContent = !this.showContent;
  }

}

