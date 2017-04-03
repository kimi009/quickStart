import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  /*template:`<h1>{{title}}</h1>
              <h2>My favorite hero is : {{myHero}}</h2>
              <p>Heroes:</p>
              <ul>
                <li *ngFor="let hero of heroes">
                  {{hero.id}}-->{{hero.name}}
                </li>
              </ul>
              <p *ngIf="heroes.length >8">There has 4 heroes</p>
            `*/
  templateUrl:'./app.component.html'
})
//export class AppComponent  { name = 'Angular'; }
export  class  AppComponent {
  title = 'Tour  of Heroes';
  heroes = [
    new Hero(1,'windstorm'),
    new Hero(2,'bombasto'),
    new Hero(3,'magneta'),
    new Hero(4,'tornda')
  ];
  myHero = this.heroes[0];

}
