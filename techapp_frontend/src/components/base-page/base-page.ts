import { Component } from '@angular/core';

/**
 * Generated class for the BasePageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'base-page',
  templateUrl: 'base-page.html'
})
export class BasePageComponent {

  text: string;

  constructor() {
    console.log('Hello BasePageComponent Component');
    this.text = 'Hello World';
  }

}
