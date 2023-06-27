import {Component} from '@angular/core';

@Component({
  selector: 'npm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  clickEvent() {
    console.log('click click')
  }
}
