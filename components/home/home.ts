
import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello World, {{name}} {{1+1}} !</h1>
  `
})
export class AppComponent {
  public name = 'Angular';
}
